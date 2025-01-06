const props = [
  {
    name: "title",
    desc: "标题，单元格左侧文字",
    type: "string",
    default: "null",
  },
  {
    name: "content",
    desc: "内容，单元格右侧文字",
    type: "string",
    default: "null",
  },
  {
    name: "titleIcon",
    desc: "标题左侧图标，可选值参考dmIcon",
    type: "string",
    default: "null",
  },
  {
    name: "titleIconColor",
    desc: "标题左侧图标颜色",
    type: "string",
    default: "null",
  },
  {
    name: "titleIconSize",
    desc: "标题左侧图标大小",
    type: "string",
    default: "1rem",
  },
  {
    name: "arrow",
    desc: "启用箭头单元格",
    type: "boolean",
    default: "false",
  },
  {
    name: "icon",
    desc: "启用 arrow 属性后，右侧图标",
    type: "string",
    default: "null",
  },
  {
    name: "iconColor",
    desc: "启用 arrow 属性后，右侧图标颜色",
    type: "string",
    default: "null",
  },
  {
    name: "iconSize",
    desc: "启用 arrow 属性后，右侧图标大小",
    type: "string",
    default: "1rem",
  },
  {
    name: "border",
    desc: "启用下边框",
    type: "boolean",
    default: "true",
  },
]

const events = [
  {
    name: "rightClick",
    desc: "右侧点击事件，当 arrow 属性为 true 时触发",
    type: "event: MouseEvent",
  },
];

const style = [
  {
    name: "--dm-cell-font-size",
    default: "0.88rem",
    desc: null,
  },
  {
    name: "--dm-cell-line-height",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-cell-padding-block",
    default: "0.75rem",
    desc: null,
  },
  {
    name: "--dm-cell-title-text-color",
    default: "#666666",
    desc: null,
  },
  {
    name: "--dm-cell-title-font-weight",
    default: "500",
    desc: null,
  },
  {
    name: "--dm-cell-content-color",
    default: "#333333",
    desc: null,
  },
  {
    name: "--dm-cell-content-font-weight",
    default: "400",
    desc: null,
  },
  {
    name: "--dm-cell-border-bottom",
    default: "0.02rem solid #EEEEEE",
    desc: null,
  },
]

export default {
  props,
  events,
  style
}