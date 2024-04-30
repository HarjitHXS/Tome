import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from "@angular/material/button";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../../../../service/cart-service.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true,
  imports: [
    MatButton,
    MatStepperPrevious,
    MatStepper,
    MatStep,
    MatRadioGroup,
    MatRadioButton,
    ReactiveFormsModule,
    MatStepLabel,
    MatLabel,
    MatFormField,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatStepperNext,
    MatDatepickerInput,
    MatIcon,
    MatHint,
    MatSuffix
  ],
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  availabilityChecked: boolean = false;
  isLinear = true;
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
    thirdFormGroup: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder, private cartService: CartService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      readingOption: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      startDate: ['', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]],
      endDate: ['', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]]
    });
    this.thirdFormGroup = this._formBuilder.group({});
  }
  checkAvailability() {
    // Logic to check availability based on start and end dates
    this.availabilityChecked = true;
  }
}