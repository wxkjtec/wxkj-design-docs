import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { WxTable } from "wx-design";
import "wx-design/dist/wx-design.css";

import "./utils/mock";

console.log(WxTable);

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(ElementUI);
    Vue.use(WxTable);
  }
};
