import { Component, Input } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  @Input() showBreaking = true;

  news$ = this.newsService.news$;
  breakingNews$ = this.newsService.breakingNews$;
  allNews$ = this.newsService.allNews$;

  constructor(private newsService: NewsService) {}
}
