import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  InjectionToken,
  Type,
  ValueProvider
} from '@angular/core';

import { Channel, ChannelComponent } from './channel';

export const CHANNELS_TOKEN = new InjectionToken<Channel[]>('CHANNELS_TOKEN');

export function provideChannel(
  name: string,
  component: Type<ChannelComponent>
): ValueProvider[] {
  return [
    {
      provide: CHANNELS_TOKEN,
      useValue: { name, component } as Channel,
      multi: true
    },
    { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: component, multi: true }
  ];
}
