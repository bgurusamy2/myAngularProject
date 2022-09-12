import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timeout } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { TestCase } from '../TestCase';
import {MatStepper} from '@angular/material/stepper'

@Component({
  selector: 'app-testcase-wizard',
  templateUrl: './testcase-wizard.component.html',
  styleUrls: ['./testcase-wizard.component.scss']
})
export class TestcaseWizardComponent implements OnInit {
  show: string = 'default';
  testCaseselected: boolean = false;
  testDataselected: boolean = false;
  executed: boolean = false;
  results: boolean = false;
  showProgress: boolean = false;
  testCaseObj: TestCase = new TestCase();
  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({testCasefileCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({});
  finalFormGroup: FormGroup = this._formBuilder.group({});
  ngOnInit(): void {
    
  }
  doFirst(value: string):void{

    if(value === 'execute')
    {
      this.show=value;
    }
    else
      {
        this.show=value;
      }
      this.showProgress = false;
  }

  testCaseSelectionChanged(event: any): void{
    
    console.log(event.target.files[0]);
    this.testCaseObj.testCaseFile = event.target.files[0];
    this.testCaseselected =true;
  }

  testDataSelectionChanged(event: any): void{
    
    console.log(event.target.files[0]);
    this.testCaseObj.testDataFile = event.target.files[0];
    this.testDataselected = true;
  }
  validateTestData(): void{
    
    
    this.testDataselected = true;
  }

  fireTestCase(currentStep: MatStepper): void{
    
    
    this.showProgress = true;
    
    this.executed=true;
    
    currentStep.next();
    
  }
  goHome(): void{
    this.show = 'default';
    this.testCaseselected = false;
    this.testDataselected = false;
    this.executed = false;
    this.results = false;
    this.showProgress = false;
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
    this.finalFormGroup.reset();
    this.testCaseObj = new TestCase();
    
  }

}
