// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { combineLatest, OperatorFunction, Subject } from 'rxjs';
import {map, scan, shareReplay, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _news$ = new Subject<{title: string, date: number}>();
  private _breakingNews$ = new Subject<{title: string, date: number}>();

  news$ = this._news$.pipe(storeNews(), shareReplay(1));
  breakingNews$ = this._breakingNews$.pipe(storeNews(), shareReplay(1));

  allNews$ = combineLatest(
    this.breakingNews$.pipe(startWith([])),
    this.news$.pipe(startWith([]))
  ).pipe(
    map(([breaking, news]) => {
      return [...breaking, ...news].sort((a, b) => a.date - b.date);
    }),
  );

  addNews(news: string) {
    this._news$.next({title: news, date: new Date().getTime()});
  }

  addBreakingNews(news: string) {
    this._breakingNews$.next({title: `BREAKING: ${news}`, date: new Date().getTime()});
  }
}

/**
 * RxJS operator function that accumulates every news into array of news
 */
function storeNews(): OperatorFunction<object, object[]> {
  return news$ =>
    news$.pipe(
      scan<object, object[]>((allNews, news) => [...allNews, news], [])
    );
}
