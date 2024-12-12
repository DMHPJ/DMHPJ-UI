import { InjectionKey } from "vue";
import { FormParamObj } from "./interface";

export const injectArray: InjectionKey<Array<any>> = Symbol();
export const injectFunciton: InjectionKey<Function> = Symbol();
export const injectFormParam: InjectionKey<FormParamObj> = Symbol();
