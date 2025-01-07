const props = [
  {
    name: "v-model/modelValue",
    desc: "控制轻提示显隐",
    type: "Boolean",
    default: "false",
  },
  {
    name: "icon",
    desc: "轻提示图标，可选值参考dmIcon",
    type: "String",
    default: "null",
  },
  {
    name: "iconSize",
    desc: "轻提示图标大小",
    type: "String",
    default: "2.25rem",
  },
  {
    name: "iconColor",
    desc: "轻提示图标颜色",
    type: "String",
    default: "#FFFFFF",
  },
  {
    name: "message",
    desc: "轻提示消息内容",
    type: "String",
    default: "null",
  },
  {
    name: "duration",
    desc: "轻提示显示时间",
    type: "Number",
    default: "2000",
  },
]

const types = [
  {
    name: "ShowToastOption",
    desc: "JavaScript 调用时，轻提示的配置属性",
    type: "Props 中除 modelValue 外的其他属性",
  },
];

const events = [];

const slot = [
  {
    name: "default",
    desc: "默认插槽，弹出层内容",
  },
];

const style = [
  {
    name: "--dm-toast-content-min-width",
    default: "5.5rem",
    desc: null,
  },
  {
    name: "--dm-toast-content-max-width",
    default: "70vw",
    desc: null,
  },
  {
    name: "--dm-toast-background-color",
    default: "#00000099",
    desc: null,
  },
  {
    name: "--dm-toast-color",
    default: "#FFFFFF",
    desc: null,
  },
  {
    name: "--dm-toast-padding",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-toast-border-radius",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-toast-text-size",
    default: "0.88rem",
    desc: null,
  },
  {
    name: "--dm-toast-text-line-height",
    default: "1.25rem",
    desc: null,
  },
  {
    name: "--dm-toast-text-color",
    default: "#FFFFFF",
    desc: null,
  },
]

export default {
  props,
  types,
  events,
  slot,
  style
}