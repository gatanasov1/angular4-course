import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTabsComponent } from './character-tabs.component';

describe('CharacterTabsComponent', () => {
  let component: CharacterTabsComponent;
  let fixture: ComponentFixture<CharacterTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
