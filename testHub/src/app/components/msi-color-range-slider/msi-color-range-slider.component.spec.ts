import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsiColorRangeSliderComponent } from './msi-color-range-slider.component';

describe('MsiColorRangeSliderComponent', () => {
  let component: MsiColorRangeSliderComponent;
  let fixture: ComponentFixture<MsiColorRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsiColorRangeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsiColorRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
