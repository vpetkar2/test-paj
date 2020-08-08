import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagementPage } from './device-management.page';

describe('DeviceManagementPage', () => {
  let component: DeviceManagementPage;
  let fixture: ComponentFixture<DeviceManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
