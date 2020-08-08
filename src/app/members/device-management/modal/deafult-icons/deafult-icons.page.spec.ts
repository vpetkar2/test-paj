import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeafultIconsPage } from './deafult-icons.page';

describe('DeafultIconsPage', () => {
  let component: DeafultIconsPage;
  let fixture: ComponentFixture<DeafultIconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeafultIconsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeafultIconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
