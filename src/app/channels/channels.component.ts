import { Component, Inject } from '@angular/core';

import { Channel } from './channel';
import { CHANNELS_TOKEN } from './channels-token';

interface SelectedChannel extends Channel {
  showBreaking?: boolean;
}

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent {
  subscribedChannels: SelectedChannel[] = [];

  constructor(@Inject(CHANNELS_TOKEN) public channels: Channel[]) {}
}
