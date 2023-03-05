import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CpfValidationDirective, CustomValidators } from '../cpf-validation.directive';

@Component({
  selector: 'app-test-with-reactive-form',
  templateUrl: './test-with-reactive-form.component.html',
  styleUrls: ['./test-with-reactive-form.component.css']
})
export class TestWithReactiveFormComponent implements OnInit {

  testForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.testForm = new FormGroup({
      cpf: new FormControl('',CustomValidators.validateDirective(new CpfValidationDirective()))
    });
  }

  public log() {
    console.log(this.testForm);
  }

}
