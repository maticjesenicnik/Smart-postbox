import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostboxComponent } from './add-postbox.component';

describe('AddPostboxComponent', () => {
  let component: AddPostboxComponent;
  let fixture: ComponentFixture<AddPostboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
