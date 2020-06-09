import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostboxComponent } from './new-postbox.component';

describe('NewPostboxComponent', () => {
  let component: NewPostboxComponent;
  let fixture: ComponentFixture<NewPostboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
