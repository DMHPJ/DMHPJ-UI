const props = [
  {
    name: "title",
    desc: "卡片标题，存在传入值时显示标题栏",
    type: "string",
    default: "null",
  },
  {
    name: "shadow",
    desc: "卡片阴影",
    type: "boolean",
    default: "true",
  },
  {
    name: "border",
    desc: "卡片边框",
    type: "boolean",
    default: "true",
  },
  {
    name: "width",
    desc: "卡片宽度",
    type: "string",
    default: "auto",
  },
  {
    name: "height",
    desc: "卡片高度",
    type: "string",
    default: "auto",
  },
]

const events = [];

const slot = [
  {
    name: "default",
    desc: "默认插槽，卡片内容",
  },
  {
    name: "header",
    desc: "标题插槽",
  },
];

const style = [
  {
    name: "--dm-card-width",
    default: "auto",
    desc: null,
  },
  {
    name: "--dm-card-height",
    default: "auto",
    desc: null,
  },
  {
    name: "--dm-card-background-color",
    default: "#FFFFFF",
    desc: null,
  },
  {
    name: "--dm-card-header-margin",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-card-header-padding",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-card-header-border-color",
    default: "#EEEEEE",
    desc: null,
  },
  {
    name: "--dm-card-header-text-color",
    default: "#333333",
    desc: null,
  },
  {
    name: "--dm-card-header-font-size",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-card-header-font-weight",
    default: "500",
    desc: null,
  },
  {
    name: "--dm-card-header-line-height",
    default: "1.17rem",
    desc: null,
  },
  {
    name: "--dm-card-body-padding",
    default: "1rem",
    desc: null,
  },
  {
    name: "--dm-card-shadow",
    default: "0 0 1rem 0.5rem #2965FF0F",
    desc: null,
  },
  {
    name: "--dm-card-border",
    default: "0.02rem solid #EEEEEE",
    desc: null,
  },
]

export default {
  props,
  events,
  slot,
  style
}