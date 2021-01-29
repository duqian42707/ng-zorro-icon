import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ICON_GROUPS, IconGroup} from './picker.model';

const DEFAULT_DISPLAY_ICON = 'search';

@Component({
  selector: 'nzi-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.less']
})
export class NziPickerComponent implements OnInit, OnChanges {

  loading = false;
  iconGroups: IconGroup[] = [];
  value: string;
  displayIcon = DEFAULT_DISPLAY_ICON;
  // 控制弹框的一些属性
  modal = {
    title: '选择图标',
    width: '800px',
    searchKey: null,
    visible: false,
    value: null,
  };

  constructor() {
  }

  ngOnInit() {
  }

  afterOpen() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.visible) {
      if (changes.visible.currentValue) {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  // 打开弹框
  openModal(): void {
    this.modal.visible = true;
    this.loading = true;
    // todo 改用rxjs实现
    setTimeout(() => {
      this.modal.searchKey = null;
      this.iconGroups = [...ICON_GROUPS];

      this.modal.value = this.iconGroups[0].icons[0];
      if (this.value) {
        const exist = ICON_GROUPS.some(group => {
          return group.icons.some(icon => icon === this.value);
        });
      }

      this.modal.value = this.value;
      this.loading = false;
    }, 1);
  }

  // 关闭弹框
  closeModal(): void {
    this.modal.visible = false;
  }

  // 选好图标
  pickOk(): void {
    this.value = this.modal.value;
    this.closeModal();
  }

  // 搜索
  search(): void {
    if (this.modal.searchKey) {
      this.iconGroups = ICON_GROUPS.map(group => {
        const filteredIcons = group.icons.filter(icon => icon.toLowerCase().includes(this.modal.searchKey.toLowerCase()));
        const newGroup = {
          groupName: group.groupName,
          icons: filteredIcons
        };
        return newGroup;
      }).filter(group => group.icons.length > 0);
    } else {
      this.iconGroups = [...ICON_GROUPS];
    }
  }

  // 点击选中一个图标
  clickIcon(icon): void {
    this.modal.value = icon;
  }

  valueChange() {
    const value = this.value;
    const exist = ICON_GROUPS.some(group => {
      return group.icons.some(icon => icon === value);
    });
    this.displayIcon = exist ? value : DEFAULT_DISPLAY_ICON;
  }

}
