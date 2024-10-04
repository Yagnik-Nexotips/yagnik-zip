import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanPageComponent } from './comman-page.component';

describe('CommanPageComponent', () => {
  let component: CommanPageComponent;
  let fixture: ComponentFixture<CommanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
