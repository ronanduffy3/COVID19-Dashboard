import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcasesComponent } from './totalcases.component';

describe('TotalcasesComponent', () => {
  let component: TotalcasesComponent;
  let fixture: ComponentFixture<TotalcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
