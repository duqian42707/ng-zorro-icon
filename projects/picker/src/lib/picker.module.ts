import {NgModule} from '@angular/core';
import {NziPickerComponent} from './picker.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';

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
