import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldwidecasesComponent } from './worldwidecases.component';

describe('WorldwidecasesComponent', () => {
  let component: WorldwidecasesComponent;
  let fixture: ComponentFixture<WorldwidecasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldwidecasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldwidecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
