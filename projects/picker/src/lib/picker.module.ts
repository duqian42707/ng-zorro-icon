import {NgModule} from '@angular/core';
import {NziPickerComponent} from './picker.component';
import {NzIconModule, NzInputModule, NzModalModule, NzSkeletonModule, NzToolTipModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [NziPickerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
