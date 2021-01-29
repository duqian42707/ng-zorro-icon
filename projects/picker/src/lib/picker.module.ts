import {NgModule} from '@angular/core';
import {PickerComponent} from './picker.component';
import {NzIconModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [PickerComponent],
  imports: [
    NzIconModule
  ],
  exports: [PickerComponent]
})
export class PickerModule {
}
