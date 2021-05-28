import { Component, OnInit , ChangeDetectorRef, } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  frmStepTwo: FormGroup;
  result: String ;
  buttonLabel = "Scan Merchant";
  constructor(private formBuilder: FormBuilder , private cdr :ChangeDetectorRef) {
    this.frmStepTwo = this.formBuilder.group({
      qrResult: ['']
    });
  }

  getQrResultHandler(qrResult: any) {
    this.result=qrResult;
    console.log("Merchant detail " ,qrResult);
    //this.frmStepTwo.controls['qrResult'].setValue( qrResult);
    //this.frmStepTwo.controls['qrResult'].updateValueAndValidity();
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
  }

}
