import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListitemComponent } from './product-listitem.component';

describe('ProductListitemComponent', () => {
  let component: ProductListitemComponent;
  let fixture: ComponentFixture<ProductListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
