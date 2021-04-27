import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleprogressComponent } from './circleprogress.component';

describe('CircleprogressComponent', () => {
  let component: CircleprogressComponent;
  let fixture: ComponentFixture<CircleprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
