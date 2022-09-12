import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseWizardComponent } from './testcase-wizard.component';

describe('TestcaseWizardComponent', () => {
  let component: TestcaseWizardComponent;
  let fixture: ComponentFixture<TestcaseWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcaseWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
