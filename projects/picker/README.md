# ng-zorro-icon

[![](https://img.shields.io/npm/v/ng-zorro-icon.svg)](https://www.npmjs.com/package/ng-zorro-icon)

Icon Picker of [NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd) (version 8.x).

## startup

```bash
npm install ng-zorro-icon
```

`app.module.ts`:
```typescript

import {PickerModule} from 'ng-zorro-icon';

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
