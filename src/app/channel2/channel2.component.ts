import { Component, Input } from '@angular/core';

import { ChannelComponent } from '../channels/channel';

@Component({
  selector: 'app-channel2',
  templateUrl: './channel2.component.html',
  styleUrls: ['./channel2.component.css']
})
export class Channel2Component implements ChannelComponent {
  @Input() showBreakingNews = true;
}
