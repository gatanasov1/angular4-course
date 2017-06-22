import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointlessTextToggleComponent } from './pointless-text-toggle.component';

describe('PointlessTextToggleComponent', () => {
  let component: PointlessTextToggleComponent;
  let fixture: ComponentFixture<PointlessTextToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointlessTextToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointlessTextToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
