// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { combineLatest, OperatorFunction, Subject } from 'rxjs';
import {map, scan, shareReplay, startWith, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _news$ = new Subject<string>();
  private _breakingNews$ = new Subject<string>();

  news$ = this._news$.pipe(storeNews(), shareReplay(1));
  breakingNews$ = this._breakingNews$.pipe(storeNews(), shareReplay(1));

  allNews$ = combineLatest(
    // combineLatest will start emitting when all of it's streams will emit at least one time
    // that is why startWith() operator is required here - we want to emit normal news
    // even when there were no breaking news yet and vice versa
    this.breakingNews$.pipe(startWith([])),
    this.news$.pipe(startWith([]))
  ).pipe(map(([breaking, news]) => [...breaking, ...news]));

  addNews(news: string) {
    this._news$.next(news);
  }

  addBreakingNews(news: string) {
    this._breakingNews$.next(`BREAKING: ${news}`);
  }
}

/**
 * RxJS operator function that accumulates every news into array of news
 */
function storeNews(): OperatorFunction<string, string[]> {
  return news$ =>
    news$.pipe(
      scan<string, string[]>((allNews, news) => [...allNews, news], [])
    );
}
