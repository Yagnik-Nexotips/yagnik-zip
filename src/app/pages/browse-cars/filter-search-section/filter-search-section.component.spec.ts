import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchSectionComponent } from './filter-search-section.component';

describe('FilterSearchSectionComponent', () => {
  let component: FilterSearchSectionComponent;
  let fixture: ComponentFixture<FilterSearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSearchSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
