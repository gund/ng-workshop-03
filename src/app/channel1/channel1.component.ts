import { Component, Input } from '@angular/core';

import { ChannelComponent } from '../channels/channel';

@Component({
  selector: 'app-channel1',
  templateUrl: './channel1.component.html',
  styleUrls: ['./channel1.component.css']
})
export class Channel1Component implements ChannelComponent {
  @Input() showBreakingNews = false;
}
