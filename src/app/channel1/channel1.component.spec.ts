/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Channel1Component } from './channel1.component';

describe('Channel1Component', () => {
  let component: Channel1Component;
  let fixture: ComponentFixture<Channel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Channel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Channel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
