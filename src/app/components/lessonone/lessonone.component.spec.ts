import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessononeComponent } from './lessonone.component';

describe('LessononeComponent', () => {
  let component: LessononeComponent;
  let fixture: ComponentFixture<LessononeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessononeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
