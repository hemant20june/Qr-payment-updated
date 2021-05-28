import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrls: ['./fourth-step.component.scss']
})
export class FourthStepComponent implements OnInit {

  frmStepFour: FormGroup;
  imageSrc = 'assets/qr.png'
  constructor(private formBuilder: FormBuilder) {

    this.frmStepFour = this.formBuilder.group({
      name: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }
}
