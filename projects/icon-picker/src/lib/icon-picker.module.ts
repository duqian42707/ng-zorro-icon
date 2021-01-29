import {NgModule} from '@angular/core';
import {IconPickerComponent} from './icon-picker.component';
import {NzIconModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [IconPickerComponent],
  imports: [
    NzIconModule
  ],
  exports: [IconPickerComponent]
})
export class IconPickerModule {
}
