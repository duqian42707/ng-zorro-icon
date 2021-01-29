import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'demo';
  validateForm: FormGroup;
  picker = {
    value: null,
    visible: false
  };


  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      text: [null, [Validators.required]],
      icon: [null, [Validators.required]]
    });

  }

  ngOnInit() {
    this.validateForm.patchValue({text: '导出', icon: 'export'});
  }

  choose() {
    this.picker.visible = true;
  }

  valueChange(iconName) {
    console.log('valueChange：', iconName);
  }

  onPicked(iconName) {
    console.log('onPicked:', iconName);
  }

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      return;
    }
    const data = this.validateForm.getRawValue();
    console.log(data);
  }
}
