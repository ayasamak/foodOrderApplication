import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetalisComponent } from './food-detalis.component';

describe('FoodDetalisComponent', () => {
  let component: FoodDetalisComponent;
  let fixture: ComponentFixture<FoodDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
