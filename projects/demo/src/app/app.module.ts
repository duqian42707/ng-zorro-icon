import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NziPickerModule} from 'projects/picker/src/public-api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomPickerComponent} from './custom-picker/custom-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzTypographyModule} from 'ng-zorro-antd/typography';


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
