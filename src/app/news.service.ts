// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { OperatorFunction, Subject, merge } from 'rxjs';
import { scan, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _news$ = new Subject<string>();
  private _breakingNews$ = new Subject<string>();

  news$ = this._news$.pipe(storeNews(), shareReplay());
  breakingNews$ = this._breakingNews$.pipe(storeNews(), shareReplay());

  allNews$ = merge(   //merge two streams in one
    this.breakingNews$.pipe(),
    this.news$.pipe()
  ).pipe(
      scan((allNews, news) => { //as a second argument updated stream comes with 1 new value
          const lastNews = news[news.length - 1];   //can it be removed somehow?
          return [...allNews, lastNews];
      }, []),
      shareReplay()
  );

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
