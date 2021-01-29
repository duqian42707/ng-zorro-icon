import {NgModule} from '@angular/core';
import {PickerComponent} from './picker.component';
import {NzIconModule, NzInputModule, NzModalModule, NzToolTipModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [PickerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzModalModule,
    NzInputModule,
    FormsModule,
    NzToolTipModule,
  ],
  exports: [PickerComponent]
})
export class PickerModule {
}
