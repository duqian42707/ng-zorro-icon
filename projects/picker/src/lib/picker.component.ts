import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IconGroup, ICON_GROUPS} from './picker.model';

@Component({
  selector: 'nzi-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.less']
})
export class PickerComponent implements OnInit, OnChanges {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  // 已选择的
  @Input() selectedIcon: string = null;
  @Output() nziOnPickOk = new EventEmitter<string>();

  iconGroups: IconGroup[] = [];
  searchKey: string;
  value: string;

  // 控制弹框的一些属性
  modal = {
    visible: false
  };

  constructor() {
  }

  ngOnInit() {
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
    this.searchKey = null;
    this.iconGroups = [...ICON_GROUPS];
    if (this.selectedIcon) {
      this.value = this.selectedIcon;
    } else {
      this.value = this.iconGroups[0].icons[0];
    }
    this.modal.visible = true;
    this.visibleChange.emit(true);
  }

  // 关闭弹框
  closeModal(): void {
    this.modal.visible = false;
    this.visibleChange.emit(false);
  }

  // 选好图标
  pickOk(): void {
    this.nziOnPickOk.emit(this.value);
    this.closeModal();
  }

  // 搜索
  search(): void {
    if (this.searchKey) {
      this.iconGroups = ICON_GROUPS.map(group => {
        const filteredIcons = group.icons.filter(icon => icon.toLowerCase().includes(this.searchKey.toLowerCase()));
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
    this.value = icon;
  }

}
