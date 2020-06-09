import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostboxesComponent } from './postboxes.component';

describe('PostboxesComponent', () => {
  let component: PostboxesComponent;
  let fixture: ComponentFixture<PostboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
