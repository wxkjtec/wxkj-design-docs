# 安装

## npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```javascript
npm install wx-design -S
npm install element-ui -S
npm install echarts -S
```

## 快速上手

```javascript
import WxDesign from "wx-design";
import "wx-design/dist/wx-design.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import * as echarts from "echarts";

window.echarts = echarts;

Vue.use(WxDesign);
Vue.use(ElementUI);
```
