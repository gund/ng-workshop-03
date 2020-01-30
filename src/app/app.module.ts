import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { Channel1Component } from './channel1/channel1.component';
import { Channel2Component } from './channel2/channel2.component';
import { Channel5Component } from './channel5/channel5.component';
import { provideChannel } from './channels/channels-token';
import { ChannelsComponent } from './channels/channels.component';
import { NewsProviderComponent } from './news-provider/news-provider.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    Channel1Component,
    ChannelsComponent,
    Channel2Component,
    Channel5Component,
    NewsProviderComponent
  ],
  imports: [BrowserModule, FormsModule, DynamicModule.withComponents([])],
  bootstrap: [AppComponent],
  providers: [
    provideChannel('CHANNEL1', Channel1Component),
    provideChannel('CHANNEL2', Channel2Component),
    provideChannel('CHANNEL5', Channel5Component)
  ]
})
export class AppModule {}
