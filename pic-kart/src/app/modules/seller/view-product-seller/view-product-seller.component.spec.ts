import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductSellerComponent } from './view-product-seller.component';

describe('ViewProductSellerComponent', () => {
  let component: ViewProductSellerComponent;
  let fixture: ComponentFixture<ViewProductSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
