import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestModelsComponent } from './latest-models.component';

describe('LatestModelsComponent', () => {
  let component: LatestModelsComponent;
  let fixture: ComponentFixture<LatestModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
