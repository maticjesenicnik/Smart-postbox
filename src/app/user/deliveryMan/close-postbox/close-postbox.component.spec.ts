import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePostboxComponent } from './close-postbox.component';

describe('ClosePostboxComponent', () => {
  let component: ClosePostboxComponent;
  let fixture: ComponentFixture<ClosePostboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosePostboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePostboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
