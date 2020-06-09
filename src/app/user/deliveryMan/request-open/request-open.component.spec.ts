import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOpenComponent } from './request-open.component';

describe('RequestOpenComponent', () => {
  let component: RequestOpenComponent;
  let fixture: ComponentFixture<RequestOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
