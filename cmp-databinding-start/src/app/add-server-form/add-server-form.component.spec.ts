import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServerFormComponent } from './add-server-form.component';

describe('AddServerFormComponent', () => {
  let component: AddServerFormComponent;
  let fixture: ComponentFixture<AddServerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
