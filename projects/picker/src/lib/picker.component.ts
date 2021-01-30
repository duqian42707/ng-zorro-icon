import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ICON_GROUPS, IconGroup} from './picker.model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputBoolean} from 'ng-zorro-antd';

const DEFAULT_DISPLAY_ICON = 'search';

@Component({
  selector: 'nzi-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NziPickerComponent),
    multi: true
  }]
})
export class NziPickerComponent implements OnInit, OnChanges, ControlValueAccessor {

  private innerValue: string;

  @Input() @InputBoolean() nziAllowClear = false;
  @Input() nziPlaceHolder = '';
  @Output() nziOnPicked = new EventEmitter<string>();

  nziSize: 'default' | 'large' | 'small' = 'default';
  loading = false;
  iconGroups: IconGroup[] = [];
  disabled = false;
  displayIcon = DEFAULT_DISPLAY_ICON;
  // 控制弹框的一些属性
  modal = {
    title: '选择图标',
    width: '800px',
    searchKey: null,
    visible: false,
    value: null,
  };

  private onTouchedCallback: any = () => void 0;
  private onChangeCallback: any = () => void 0;

  constructor() {
  }

  ngOnInit() {
  }

  get value(): string {
    return this.innerValue;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
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


  // ------------------------------------------------------------------------
  // | Control value accessor implements
  // | 参考：https://www.jianshu.com/p/6d5a4e6af0c1
  // ------------------------------------------------------------------------

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
    if (this.innerValue !== obj) {
      this.innerValue = obj;
      this.setDisplayIcon(obj);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // 打开弹框
  openModal(): void {
    this.modal.visible = true;
    this.loading = true;
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


  // 选好图标
  pickOk(): void {
    this.value = this.modal.value;
    this.nziOnPicked.emit(this.modal.value);
    this.displayIcon = this.modal.value;
    this.closeModal();
  }

  // 显示图标预览
  setDisplayIcon(value) {
    const exist = ICON_GROUPS.some(group => {
      return group.icons.some(icon => icon === value);
    });
    this.displayIcon = exist ? value : DEFAULT_DISPLAY_ICON;
  }

}
