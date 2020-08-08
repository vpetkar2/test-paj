import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFabComponent } from './bottom-fab.component';

describe('BottomFabComponent', () => {
  let component: BottomFabComponent;
  let fixture: ComponentFixture<BottomFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomFabComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
