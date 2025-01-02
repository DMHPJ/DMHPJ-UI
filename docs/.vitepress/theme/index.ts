import Theme from "vitepress/theme";
import "dmhpj-ui/dist/style.css"
import * as dmhpjUI from "dmhpj-ui";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(dmhpjUI);
  }
}