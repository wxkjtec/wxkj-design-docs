### wx-table 基本使用

:::demo

```html
<template>
  <div style="height: 600px">
    <wx-table
      tableId="tableid"
      size="mini"
      background
      isCanResizeParent
      border
      index
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
      :loading="loading"
      paginationAlign="center"
      @paginationChange="onPaginationChange"
      @onRefreshTable="onRefreshTable"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        pagination: {
          pageSize: 10,
          pageNum: 1,
          total: 0,
        },
        columns: [
          {
            label: "ID",
            prop: "id",
            show: true,
          },
          {
            label: "头像",
            prop: "avatar",
            render: (h, { row }) => {
              return h("el-image", {
                props: {
                  src: row.avatar,
                  "preview-src-list": [row.avatar],
                },
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                },
              });
            },
            show: true,
          },
          {
            label: "姓名",
            prop: "name",
            show: true,
          },
          {
            label: "年龄",
            prop: "age",
            show: true,
          },
          {
            label: "地址",
            prop: "address",
            show: true,
          },
          {
            label: "编号",
            prop: "number",
          },
          {
            label: "开始时间",
            prop: "startDate",
            show: true,
          },
        ],
        tableData: [],
      };
    },
    methods: {
      fetchData() {
        const { pageSize, pageNum } = this.pagination;
        this.loading = true;
        this.$axios("/api/page", {
          method: "post",
          data: {
            pageSize: pageSize || 10,
            pageNum: pageNum || 1,
          },
        })
          .then((res) => {
            if (res.status.toString().startsWith(2)) {
              const { records, total } = res.data.data;
              this.pagination.total = total;
              this.tableData = records;
            }
          })
          .finally(() => {
            this.loading = false;
          });
      },
      onPaginationChange({ pageSize, pageNum }) {
        this.pagination.pageSize = pageSize;
        this.pagination.pageNum = pageNum;
        this.fetchData();
      },
      onRefreshTable() {
        this.fetchData();
      },
    },
    created() {
      this.fetchData();
    },
  };
</script>
```

:::

### Attributes

> 除了以下属性外，官网文档内的 Attributes 也都支持。具体可以参考[el-table](https://element.eleme.cn/#/zh-CN/component/table)

<div class="special_table">

| 参数               | 说明                                         | 类型     | 可选值              | 默认值                                                       |
| ------------------ | -------------------------------------------- | -------- | ------------------- | ------------------------------------------------------------ |
| tableId            | table 的唯一标识，用于保存表格设置的存储 key | string   | -                   | —                                                            |
| isSaveTableSetting | 是否保存 table 设置                          | boolean  | -                   | true                                                         |
| isCanResizeParent  | 继承父元素高度                               | boolean  |                     | true                                                         |
| hasToolsBox        | 是否显示工具箱                               | boolean  | -                   | true                                                         |
| loading            | 是否加载中状态                               | boolean  | —                   | false                                                        |
| loadingText        | loading 状态的文本内容                       | string   | —                   | 加载中...                                                    |
| loadingIcon        | loading 图标                                 | string   | —                   | el-icon-loading                                              |
| loadingMaskColor   | loading 遮罩的颜色                           | string   | —                   | rgba(0, 0, 0, 0.01)                                          |
| expand             | 是否可展开                                   | boolean  | -                   | false                                                        |
| index              | 是否显示索引                                 | boolean  | -                   | true                                                         |
| indexAlign         | 索引对齐方式                                 | string   | left, center, right | center                                                       |
| indexColLabel      | 索引列名称                                   | string   | -                   | 索引                                                         |
| indexColWidth      | 索引列宽度                                   | number   | -                   | 82                                                           |
| selection          | 是否显示选择框                               | boolean  | -                   | false                                                        |
| selectionColWidth  | 选择框所在列宽                               | number   | -                   | 82                                                           |
| columns            | 列配置信息                                   | array    | -                   | []                                                           |
| defaultSize        | 表格默认大小                                 | string   | medium, small, mini | medium                                                       |
| fetchSetting       | 分页字段配置                                 | object   | -                   | pageField: pageNum , sizeField: pageSize , totalField: total |
| pagination         | 分页参数                                     | object   | -                   | 字段值与 fetchSetting 一致                                   |
| pageSizeOptions    | 每页显示个数选择器的选项设置                 | number[] | -                   | [10, 20, 30, 40, 50, 100]                                    |
| defaultPageSize    | 每页显示默认个数                             | number   | -                   | 10                                                           |
| paginationLayout   | 分页布局，名用逗号分隔                       | number   | -                   | total, sizes, prev, pager, next                              |
| paginationAlign    | 分页对齐方式                                 | string   | left, center, right | right                                                        |

</div>

### columns

### Slot

> 除了以下事件外，官网文档内的 event 也都支持。

<div class="special_table">

| name   | 说明           |
| ------ | -------------- | --- |
| title  | 表格的标题区   | -   |
| expand | 表格行内展开区 | -   |

</div>

### Events

> 除了以下事件外，官网文档内的 event 也都支持。具体可以参考[el-table](https://element.eleme.cn/#/zh-CN/component/table)

<div class="special_table">

| 事件名称         | 说明           | 回调参数 |
| ---------------- | -------------- | -------- |
| onRefreshTable   | 刷新表格数据   | -        |
| paginationChange | 分页参数改变时 | 分页参数 |

</div>
