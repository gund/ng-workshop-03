import { Type } from '@angular/core';

export interface ChannelComponent {
  /** @Input */
  showBreakingNews: boolean;
}

export interface Channel {
  name: string;
  component: Type<ChannelComponent>;
}
