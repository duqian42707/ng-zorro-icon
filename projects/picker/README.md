# ng-zorro-icon

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## startup

```bash
npm install ng-zorro-icon
```

`app.module.ts`:
```typescript

import {PickerModule} from 'projects/picker/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //
    PickerModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

html:
```html

<button nz-button nzType="primary" (click)="choose()">Choose Icon</button>
<nzi-picker [selectedIcon]="'upload'" [(visible)]="picker.visible" (nziOnPickOk)="onPickOk($event)"></nzi-picker>
```

component:
```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demo';

  picker = {
    visible: false
  };

  choose() {
    this.picker.visible = true;
  }

  onPickOk(iconName) {
    console.log('choose icon：', iconName);
  }
}
```
