import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceImgPage } from './device-img.page';

describe('DeviceImgPage', () => {
  let component: DeviceImgPage;
  let fixture: ComponentFixture<DeviceImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
