import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductCustomerComponent } from './view-product-customer.component';

describe('ViewProductCustomerComponent', () => {
  let component: ViewProductCustomerComponent;
  let fixture: ComponentFixture<ViewProductCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
