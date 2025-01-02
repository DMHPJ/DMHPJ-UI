const props = [
  {
    name: "plain",
    desc: "是否为朴素按钮",
    type: "boolean",
    default: "false",
  },
  {
    name: "block",
    desc: "是否为块级元素",
    type: "boolean",
    default: "false",
  },
  {
    name: "readonly",
    desc: "是否只读按钮",
    type: "boolean",
    default: "false",
  },
  {
    name: "disabled",
    desc: "是否禁用按钮",
    type: "boolean",
    default: "false",
  },
  {
    name: "shadow",
    desc: "是否启用阴影",
    type: "boolean",
    default: "false",
  },
]

const events = [
  {
    name: "click",
    desc: "点击按钮，且按钮状态不为加载或禁用时触发",
    type: "event: MouseEvent",
  },
];

const style = [
  {
    name: "--dm-button-font-size",
    default: "0.88rem",
    desc: null,
  },
  {
    name: "--dm-button-font-weight",
    default: "500",
    desc: null,
  },
  {
    name: "--dm-button-line-height",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-button-padding",
    default: "0.75rem 1.25rem",
    desc: null,
  },
  {
    name: "--dm-button-border-radius",
    default: "1.44rem",
    desc: null,
  },
  {
    name: "--dm-button-text-align",
    default: "center",
    desc: null,
  },
  {
    name: "--dm-button-text-color",
    default: "#FFFFFF",
    desc: null,
  },
  {
    name: "--dm-button-background-color",
    default: "#2965FF",
    desc: null,
  },
  {
    name: "--dm-button-disabled-text-color",
    default: "#999999",
    desc: null,
  },
  {
    name: "--dm-button-disabled-background-color",
    default: "#EEEEEE",
    desc: null,
  },
  {
    name: "--dm-button-plain-text-color",
    default: "#2965FF",
    desc: null,
  },
  {
    name: "--dm-button-plain-background-color",
    default: "transparent",
    desc: null,
  },
  {
    name: "--dm-button-plain-border-color",
    default: "#2965FF",
    desc: null,
  },
  {
    name: "--dm-button-plain-disabled-text-color",
    default: "#999999",
    desc: null,
  },
  {
    name: "--dm-button-plain-background-color",
    default: "transparent",
    desc: null,
  },
  {
    name: "--dm-button-plain-disabled-border-color",
    default: "#999999",
    desc: null,
  },
]

export default {
  props,
  events,
  style
}