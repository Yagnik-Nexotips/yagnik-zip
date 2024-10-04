import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTestDriveComponent } from './book-test-drive.component';

describe('BookTestDriveComponent', () => {
  let component: BookTestDriveComponent;
  let fixture: ComponentFixture<BookTestDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTestDriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTestDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
