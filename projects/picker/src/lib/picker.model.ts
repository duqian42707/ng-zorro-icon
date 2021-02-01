export interface IconGroup {
  groupName: string;
  icons: string[];
}

export const ICON_GROUPS = [
  {
    groupName: '方向性图标',
    icons: [
      'step-backward',
      'step-forward',
      'fast-backward',
      'fast-forward',
      'shrink',
      'arrows-alt',
      'down',
      'up',
      'left',
      'right',
      'caret-up',
      'caret-down',
      'caret-left',
      'caret-right',
      'up-circle',
      'down-circle',
      'left-circle',
      'right-circle',
      'double-right',
      'double-left',
      'vertical-left',
      'vertical-right',
      'vertical-align-top',
      'vertical-align-middle',
      'vertical-align-bottom',
      'forward',
      'backward',
      'rollback',
      'enter',
      'retweet',
      'swap',
      'swap-left',
      'swap-right',
      'arrow-up',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'play-circle',
      'up-square',
      'down-square',
      'left-square',
      'right-square',
      'login',
      'logout',
      'menu-fold',
      'menu-unfold',
      'border-bottom',
      'border-horizontal',
      'border-inner',
      'border-outer',
      'border-left',
      'border-right',
      'border-top',
      'border-verticle',
      'pic-center',
      'pic-left',
      'pic-right',
      'radius-bottomleft',
      'radius-bottomright',
      'radius-upleft',
      'radius-upright',
      'fullscreen',
      'fullscreen-exit',
    ]
  },
  {
    groupName: '提示建议性图标',
    icons: [
      'question',
      'question-circle',
      'plus',
      'plus-circle',
      'pause',
      'pause-circle',
      'minus',
      'minus-circle',
      'plus-square',
      'minus-square',
      'info',
      'info-circle',
      'exclamation',
      'exclamation-circle',
      'close',
      'close-circle',
      'close-square',
      'check',
      'check-circle',
      'check-square',
      'clock-circle',
      'warning',
      'issues-close',
      'stop',
    ]
  },
  {
    groupName: '编辑类图标',
    icons: [
      'edit',
      'form',
      'copy',
      'scissor',
      'delete',
      'snippets',
      'diff',
      'highlight',
      'align-center',
      'align-left',
      'align-right',
      'bg-colors',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'redo',
      'undo',
      'zoom-in',
      'zoom-out',
      'font-colors',
      'font-size',
      'line-height',
      'dash',
      'small-dash',
      'sort-ascending',
      'sort-descending',
      'drag',
      'ordered-list',
      'unordered-list',
      'radius-setting',
      'column-width',
    ]
  },
  {
    groupName: '数据类图标',
    icons: [
      'area-chart',
      'pie-chart',
      'bar-chart',
      'dot-chart',
      'line-chart',
      'radar-chart',
      'heat-map',
      'fall',
      'rise',
      'stock',
      'box-plot',
      'fund',
      'sliders',
    ]
  },
  {
    groupName: '品牌和标识',
    icons: [
      'android',
      'apple',
      'windows',
      'ie',
      'chrome',
      'github',
      'aliwangwang',
      'dingding',
      'weibo-square',
      'weibo-circle',
      'taobao-circle',
      'html5',
      'weibo',
      'twitter',
      'wechat',
      'youtube',
      'alipay-circle',
      'taobao',
      'skype',
      'qq',
      'medium-workmark',
      'gitlab',
      'medium',
      'linkedin',
      'google-plus',
      'dropbox',
      'facebook',
      'codepen',
      'code-sandbox',
      'amazon',
      'google',
      'codepen-circle',
      'alipay',
      'ant-design',
      'ant-cloud',
      'aliyun',
      'zhihu',
      'slack',
      'slack-square',
      'behance',
      'behance-square',
      'dribbble',
      'dribbble-square',
      'instagram',
      'yuque',
      'alibaba',
      'yahoo',
      'reddit',
      'sketch',
    ]
  },
  {
    groupName: '网站通用图标',
    icons: [

      'account-book',
      'apartment',
      'appstore',
      'appstore-add',
      'api',
      'aim',
      'barcode',
      'audio-muted',
      'bank',
      'audit',
      'block',
      'bars',
      'book',
      'alert',
      'bell',
      'border',
      'borderless-table',
      'audio',
      'bug',
      'bulb',
      'calendar',
      'build',
      'branches',
      'car',
      'calculator',
      'camera',
      'carry-out',
      'clear',
      'ci-circle',
      'cloud-download',
      'cloud',
      'cloud-upload',
      'cloud-server',
      'code',
      'ci',
      'coffee',
      'cloud-sync',
      'cluster',
      'column-height',
      'comment',
      'console-sql',
      'compass',
      'compress',
      'container',
      'credit-card',
      'crown',
      'dashboard',
      'database',
      'copyright-circle',
      'delete-column',
      'delete-row',
      'deployment-unit',
      'desktop',
      'contacts',
      'dingtalk',
      'delivered-procedure',
      'disconnect',
      'dislike',
      'dollar-circle',
      'customer-service',
      'download',
      'copyright',
      'dollar',
      'control',
      'ellipsis',
      'environment',
      'exception',
      'expand-alt',
      'euro',
      'eye',
      'experiment',
      'field-number',
      'expand',
      'field-string',
      'field-time',
      'file-exclamation',
      'euro-circle',
      'field-binary',
      'file-done',
      'file-excel',
      'file-gif',
      'file-markdown',
      'file-add',
      'file-pdf',
      'file-jpg',
      'file-image',
      'file',
      'file-protect',
      'file-sync',
      'file-unknown',
      'eye-invisible',
      'file-text',
      'export',
      'file-search',
      'file-word',
      'file-zip',
      'filter',
      'flag',
      'folder-add',
      'fire',
      'folder-view',
      'folder',
      'folder-open',
      'fork',
      'format-painter',
      'function',
      'fund-projection-screen',
      'frown',
      'fund-view',
      'gift',
      'gateway',
      'gold',
      'global',
      'gif',
      'funnel-plot',
      'group',
      'hdd',
      'heart',
      'hourglass',
      'history',
      'home',
      'idcard',
      'import',
      'insert-row-above',
      'insert-row-right',
      'insurance',
      'inbox',
      'insert-row-below',
      'insert-row-left',
      'laptop',
      'interaction',
      'layout',
      'key',
      'like',
      'line',
      'link',
      'loading',
      'loading-3-quarters',
      'lock',
      'man',
      'mail',
      'mac-command',
      'medicine-box',
      'file-ppt',
      'merge-cells',
      'menu',
      'message',
      'mobile',
      'money-collect',
      'monitor',
      'node-collapse',
      'more',
      'node-expand',
      'notification',
      'partition',
      'paper-clip',
      'node-index',
      'percentage',
      'number',
      'pay-circle',
      'phone',
      'one-to-one',
      'picture',
      'play-square',
      'pound-circle',
      'meh',
      'poweroff',
      'printer',
      'pound',
      'profile',
      'property-safety',
      'pull-request',
      'qrcode',
      'read',
      'reconciliation',
      'red-envelope',
      'reload',
      'rest',
      'robot',
      'rotate-right',
      'safety-certificate',
      'rocket',
      'rotate-left',
      'pushpin',
      'save',
      'safety',
      'schedule',
      'search',
      'security-scan',
      'select',
      'scan',
      'shake',
      'send',
      'share-alt',
      'shopping',
      'shopping-cart',
      'project',
      'setting',
      'skin',
      'shop',
      'sound',
      'solution',
      'star',
      'split-cells',
      'smile',
      'subnode',
      'sisternode',
      'table',
      'switcher',
      'sync',
      'tags',
      'thunderbolt',
      'team',
      'to-top',
      'transaction',
      'trademark-circle',
      'trademark',
      'ungroup',
      'trophy',
      'tool',
      'translation',
      'unlock',
      'user-add',
      'user-delete',
      'user',
      'usb',
      'user-switch',
      'usergroup-add',
      'usergroup-delete',
      'tablet',
      'video-camera-add',
      'upload',
      'video-camera',
      'wallet',
      'whats-app',
      'wifi',
      'woman',
      'verified',
      'tag',
    ]
  },
];
