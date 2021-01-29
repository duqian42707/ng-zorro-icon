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
    console.log('选择了图标：', iconName);
  }
}
