import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverPackageComponent } from './deliver-package.component';

describe('DeliverPackageComponent', () => {
  let component: DeliverPackageComponent;
  let fixture: ComponentFixture<DeliverPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
