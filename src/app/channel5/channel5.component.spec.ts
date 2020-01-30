/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Channel5Component } from './channel5.component';

describe('Channel5Component', () => {
  let component: Channel5Component;
  let fixture: ComponentFixture<Channel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Channel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Channel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
