import {NgModule} from '@angular/core';
import {NziPickerComponent} from './picker.component';
import {NzIconModule, NzInputModule, NzModalModule, NzSkeletonModule, NzToolTipModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [NziPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzModalModule,
    NzInputModule,
    NzToolTipModule,
    NzSkeletonModule,
  ],
  exports: [NziPickerComponent]
})
export class NziPickerModule {
}
