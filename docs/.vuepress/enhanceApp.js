import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import WxDesign from "wx-design";
import "wx-design/dist/wx-design.css";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(ElementUI);
    Vue.use(WxDesign);
  }
};
