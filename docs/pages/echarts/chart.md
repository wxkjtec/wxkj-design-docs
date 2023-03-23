### echarts 图表 基本使用

:::demo

```html
<template>
  <wx-echarts :option="option" style="width: 100%; height: 520px;" />
</template>
<script>
  export default {
    data() {
      return {
        option: {
          backgroundColor: "#0B1837",
          color: [
            "#EAEA26",
            "#906BF9",
            "#FE5656",
            "#01E17E",
            "#3DD1F9",
            "#FFAD05",
          ],
          grid: {
            left: -100,
            top: 50,
            bottom: 10,
            right: 10,
            containLabel: true,
          },
          tooltip: {
            trigger: "item",
            formatter: "{b} : {c} ({d}%)",
          },
          legend: {
            type: "scroll",
            orient: "vartical",
            // x: "right",
            top: "center",
            right: "15",
            // bottom: "0%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
              color: "#A3E2F4",
              fontSize: 14,
              fontWeight: 0,
            },
            data: ["访客", "人脸识别", "人闸", "车闸", "小程序", "终端"],
          },
          polar: {},
          angleAxis: {
            interval: 1,
            type: "category",
            data: [],
            z: 10,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: "#0B4A6B",
              margin: 8,
              fontSize: 16,
            },
          },
          radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              formatter: "{value} %",
              show: false,
              padding: [0, 0, 20, 0],
              color: "#0B3E5E",
              fontSize: 16,
            },
            splitLine: {
              lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid",
              },
            },
          },
          calculable: true,
          series: [
            {
              type: "pie",
              radius: ["5%", "10%"],
              hoverAnimation: false,
              labelLine: {
                normal: {
                  show: false,
                  length: 30,
                  length2: 55,
                },
                emphasis: {
                  show: false,
                },
              },
              data: [
                {
                  name: "",
                  value: 0,
                  itemStyle: {
                    normal: {
                      color: "#0B4A6B",
                    },
                  },
                },
              ],
            },
            {
              type: "pie",
              radius: ["90%", "95%"],
              hoverAnimation: false,
              labelLine: {
                normal: {
                  show: false,
                  length: 30,
                  length2: 55,
                },
                emphasis: {
                  show: false,
                },
              },
              name: "",
              data: [
                {
                  name: "",
                  value: 0,
                  itemStyle: {
                    normal: {
                      color: "#0B4A6B",
                    },
                  },
                },
              ],
            },
            {
              stack: "a",
              type: "pie",
              radius: ["20%", "80%"],
              roseType: "area",
              zlevel: 10,
              label: {
                normal: {
                  show: true,
                  formatter: "{c}",
                  textStyle: {
                    fontSize: 12,
                  },
                  position: "outside",
                },
                emphasis: {
                  show: true,
                },
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 20,
                  length2: 55,
                },
                emphasis: {
                  show: false,
                },
              },
              data: [
                {
                  value: 10,
                  name: "访客",
                },
                {
                  value: 5,
                  name: "人脸识别",
                },
                {
                  value: 15,
                  name: "人闸",
                },
                {
                  value: 25,
                  name: "车闸",
                },
                {
                  value: 20,
                  name: "小程序",
                },
                {
                  value: 35,
                  name: "终端",
                },
              ],
            },
          ],
        },
      };
    },
  };
</script>
```

:::

### Attributes

<div class="special_table">

| 参数                  | 说明                                                          | 类型    | 可选值     | 默认值              |
| --------------------- | ------------------------------------------------------------- | ------- | ---------- | ------------------- |
| option                | echarts 的 option，组件内部会自动监听 option 的变化，动态渲染 | object  | -          | —                   |
| showFullScreenSetting | 是否显示全屏按钮                                              | boolean | -          | true                |
| fullScreenIcon        | 全屏按钮 icon ，类型为 pathData 路径数据                      | string  |            | —                   |
| isShowEmpty           | 是否显示空状态                                                | boolean | -          | false               |
| showLoading           | 是否加载中状态                                                | boolean | —          | false               |
| loadingText           | loading 状态的文本内容                                        | string  | —          | 加载中...           |
| loadingTextColor      | loading 文本的颜色                                            | string  | —          | #444                |
| loadingColor          | loading 图标的颜色                                            | string  | —          | #3275F7             |
| loadingMaskColor      | loading 遮罩的颜色                                            | string  | —          | rgba(0, 0, 0, 0.01) |
| renderer              | echarts 的渲染方式                                            | string  | canvas/svg | canvas              |

</div>

### Methods

<div class="special_table">

| 方法名      | 说明                                           | 参数              |
| ----------- | ---------------------------------------------- | ----------------- |
| setOption   | 设置 echarts 的 option                         | echarts 的 option |
| getInstance | 获取 echarts 的实例，可用于 echarts 的事件操作 | -                 |
| resize      | 重新渲染 echarts, 手动重置时可以调用           | -                 |

</div>
