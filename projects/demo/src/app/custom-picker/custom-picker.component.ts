import {Component, OnInit, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-custom-picker',
  templateUrl: './custom-picker.component.html',
  styleUrls: ['./custom-picker.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomPickerComponent),
      multi: true
    }
  ]
})
export class CustomPickerComponent implements OnInit, ControlValueAccessor {

  private innerValue: any = '';
  private onTouchedCallback: any = () => void 0;
  private onChangeCallback: any = () => void 0;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.value = '5000';
    }, 5000);
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
