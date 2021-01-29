import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NziPickerModule} from 'projects/picker/src/public-api';
import {NzButtonModule, NzFormModule, NzInputModule, NzTypographyModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomPickerComponent} from './custom-picker/custom-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NziPickerModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzTypographyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
