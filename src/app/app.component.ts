import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Qr-Payment-portal';

  //form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;

  //@ViewChild('stepOne') stepOneComponent: FirstStepComponent;
  @ViewChild('stepTwo') stepTwoComponent: SecondStepComponent;
  @ViewChild('stepThree') stepThreeComponent: ThirdStepComponent;
  @ViewChild('stepFour') stepFourComponent: FourthStepComponent;

  constructor(private cdr :ChangeDetectorRef){}

  ngAfterViewInit(){
   // this.form1 = this.stepOneComponent.frmStepOne;
    this.form2 = this.stepTwoComponent.frmStepTwo;
    this.form3 = this.stepThreeComponent.frmStepThree;
    this.form4 = this.stepFourComponent.frmStepFour;
    this.cdr.detectChanges();
  }

  isNameValid() {
    return  this.form2.pristine || this.form2.valid
            || this.form3.pristine || this.form3.valid || this.form4.pristine || this.form4.valid;
  }

}
