import { VNode } from "vue";

export interface stringKeyObject { [key: string]: any; }

export interface tableColumn{
  prop: string;
  label: string;
  width?: string | number;
  minWidth?: string | number;
  cell?: VNode | null
}
