import { Component } from '@angular/core';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-provider',
  templateUrl: './news-provider.component.html',
  styleUrls: ['./news-provider.component.css']
})
export class NewsProviderComponent {
  constructor(private newsService: NewsService) {}

  addNews(news: string, isBreaking: boolean) {
    if (isBreaking) {
      this.newsService.addBreakingNews(news);
    } else {
      this.newsService.addNews(news);
    }
  }
}
