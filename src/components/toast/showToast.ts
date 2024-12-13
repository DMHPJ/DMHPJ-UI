import { createApp } from "vue";
import Toast from "./index.vue";
import { ShowToastOption } from "../common/ts/interface";

const showToast = (showToastOption: ShowToastOption) => {
  const {message, icon, duration} = showToastOption;
  const div = document.createElement("div");
  const componentInstance = createApp(Toast, {
    modelValue: true,
    icon,
    message,
    duration: duration || 2000
  });
  componentInstance.mount(div);
  document.body.appendChild(div);

  let timer: number = 0;
  clearTimeout(timer);
  timer = setTimeout(() => {
    componentInstance.unmount();
    document.body.removeChild(div);
  }, duration || 2000);
}

export default showToast;