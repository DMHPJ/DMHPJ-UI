const props = [
  {
    name: "show",
    desc: "控制弹出层显隐",
    type: "boolean",
    default: "false",
  },
  {
    name: "closeByClickOverlay",
    desc: "是否可以通过点击遮罩层关闭弹出层",
    type: "boolean",
    default: "true",
  },
  {
    name: "position",
    desc: "弹出层弹出位置",
    type: "PopupPositionType",
    default: "bottom",
  },
  {
    name: "duration",
    desc: "弹出层弹出动画时长",
    type: "number",
    default: "300",
  },
  {
    name: "zIndex",
    desc: "-",
    type: "number",
    default: "2000",
  },
]

const types = [
  {
    name: "PopupPositionType",
    desc: "弹出层弹出位置类型",
    type: "bottom | left | right | center",
  },
];

const events = [
  {
    name: "clickOverlay",
    desc: "无论 closeByClickOverlay 是否为 true ，点击遮罩层时触发",
    type: "event: MouseEvent",
  },
  {
    name: "beforeOpen",
    desc: "弹出层弹出前触发",
    type: "-",
  },
  {
    name: "opened",
    desc: "弹出层弹出完成后触发",
    type: "-",
  },
  {
    name: "beforeClosed",
    desc: "弹出层关闭前触发",
    type: "-",
  },
  {
    name: "closed",
    desc: "弹出层关闭完成后触发",
    type: "-",
  },
];

const slot = [
  {
    name: "default",
    desc: "默认插槽，弹出层内容",
  },
];

const style = [
  {
    name: "--dm-overlay-color",
    default: "#00000099",
    desc: null,
  },
  {
    name: "--dm-popup-content-background-color",
    default: "#FFFFFF",
    desc: null,
  },
  {
    name: "--dm-popup-left-padding",
    default: "2.25rem 1rem 2.25rem 1rem",
    desc: null,
  },
  {
    name: "--dm-popup-right-padding",
    default: "2.25rem 1rem 2.25rem 1rem",
    desc: null,
  },
  {
    name: "--dm-popup-center-border-radius",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-popup-center-padding",
    default: "1.5rem",
    desc: null,
  },
  {
    name: "--dm-popup-bottom-border-radius",
    default: "1rem 1rem 0 0",
    desc: null,
  },
  {
    name: "--dm-popup-bottom-padding",
    default: "1.5rem 1.625rem 2.375rem 1.625rem",
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