import { Component, Input } from '@angular/core';

import { ChannelComponent } from '../channels/channel';

@Component({
  selector: 'app-channel5',
  templateUrl: './channel5.component.html',
  styleUrls: ['./channel5.component.css']
})
export class Channel5Component implements ChannelComponent {
  @Input() showBreakingNews = false;
}
