import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NziPickerModule} from 'projects/picker/src/public-api';
import {NzButtonModule, NzFormModule, NzInputModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomPickerComponent } from './custom-picker/custom-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NziPickerModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
