### wx-date 基本使用

:::demo

```html
<template>
  <div id="app">
    <div class="block">
      <span class="demonstration">选择日期范围</span>
      <wx-date
        type="daterange"
        :shortcuts="shotcuts"
        :startDate.sync="startDate"
        :endDate.sync="endDate"
      />
    </div>
    <div class="block">
      <span class="demonstration">选择日</span>
      <wx-date type="date" :shortcuts="shotcuts2" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        shotcuts: [
          "lastweek",
          "nextweek",
          "lastmonth",
          "nextmonth",
          "quarter",
          "halfyear",
          "lastyear",
          "nextyear",
        ],
        shotcuts2: [
          "today",
          "yesterday",
          "tomorrow",
          "lastweek",
          "nextweek",
          "lastmonth",
          "nextmonth",
          "quarter",
          "halfyear",
          "lastyear",
          "nextyear",
        ],
        date: "",
        startDate: "",
        endDate: "",
      };
    },
  };
</script>
<style>
  #app {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    flex: 1;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```

:::

### Attributes

> 除了以下属性外，官网文档内的 Attributes 也都支持。具体可以参考[date-picker](https://element.eleme.cn/#/zh-CN/component/date-picker)

<div class="special_table">

| 参数             | 说明                                                                                                                   | 类型                                      | 可选值                                                                                            | 默认值     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------- |
| value / v-model  | 绑定值                                                                                                                 | date(DatePicker) / array(DateRangePicker) | -                                                                                                 | -          |
| type             | 显示类型                                                                                                               | string                                    | year/month/date/dates/months/years week/datetime/datetimerange/daterange/monthrange               | date       |
| placeholder      | 非范围选择时的占位内容                                                                                                 | string                                    | 请选择日期                                                                                        | -          |
| rangeSeparator   | 选择范围时的分隔符                                                                                                     | string                                    | -                                                                                                 | 至         |
| startPlaceholder | 范围选择时开始日期的占位内容                                                                                           | string                                    | -                                                                                                 | 开始日期   |
| endPlaceholder   | 范围选择时结束日期的占位内容                                                                                           | string                                    | -                                                                                                 | 结束日期   |
| valueFormat      | 可选，绑定值的格式。                                                                                                   | string                                    | 可以参考[日期格式](https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi)           | yyyy-MM-dd |
| disabledDate     | 禁用                                                                                                                   | boolean                                   | -                                                                                                 | false      |
| shortcuts        | 设置快捷选项。如果传了 `pickerOptions` 则该属性将被覆盖导致无效                                                        | array                                     | today/yesterday/tomorrow/lastweek/nextweek/lastmonth/nextmonth/quarter/halfyear/lastyear/nextyear | []         |
| startDate        | type 为 `daterange` 的时候开始时间                                                                                     | string                                    | -                                                                                                 | -          |
| endDate          | type 为 `daterange` 的时候结束时间                                                                                     | string                                    | -                                                                                                 | -          |
| pickerOptions    | 当前时间日期选择器特有的选项参考[date-picker](https://element.eleme.cn/#/zh-CN/component/date-picker)的 picker-options | object                                    | -                                                                                                 | {}         |

</div>

### Events

> 官网文档内的 event 也都支持。具体可以参考[date-picker](https://element.eleme.cn/#/zh-CN/component/date-picker)
