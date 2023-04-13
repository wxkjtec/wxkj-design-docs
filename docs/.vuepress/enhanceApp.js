import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { WxTable, WxDate } from "wx-design";
import "wx-design/dist/wx-design.css";
import axios from "axios";

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;

  Vue.use(ElementUI);
  Vue.use(WxTable);
  Vue.use(WxDate);
};
