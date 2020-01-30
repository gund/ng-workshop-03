// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { OperatorFunction, BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _news$ = new BehaviorSubject<string[]>([]);
  private _breakingNews$ = new BehaviorSubject<string[]>([]);

  news$ = this._news$;
  breakingNews$ = this._breakingNews$;

  allNews$ = new BehaviorSubject<string[]>([]);

  addNews(news: string) {
    this._news$.next([...this._news$.getValue(), news]);
    this.allNews$.next([...this.allNews$.getValue(), news]);
  }

  addBreakingNews(news: string) {
    const breakingString = `BREAKING: ${news}`;
    this._breakingNews$.next(([...this._breakingNews$.getValue(), breakingString]));
    this.allNews$.next([...this.allNews$.getValue(), breakingString]);
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
