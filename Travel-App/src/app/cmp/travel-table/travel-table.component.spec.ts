import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTableComponent } from './travel-table.component';

describe('TravelTableComponent', () => {
  let component: TravelTableComponent;
  let fixture: ComponentFixture<TravelTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelTableComponent]
    });
    fixture = TestBed.createComponent(TravelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
