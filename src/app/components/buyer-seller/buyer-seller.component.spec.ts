import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSellerComponent } from './buyer-seller.component';

describe('BuyerSellerComponent', () => {
  let component: BuyerSellerComponent;
  let fixture: ComponentFixture<BuyerSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyerSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
