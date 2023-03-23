module.exports = {
  theme: "",
  title: "wx-design",
  description: "提供更接近业务场景的组件",
  base: "/",
  port: "8099",
  head: [
    [
      "script",
      {
        src: "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.1/echarts.min.js",
      },
    ],
  ],
  themeConfig: {
    // 顶部导航栏
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "组件",
        link: "/pages/",
      },
      {
        text: "规范",
        link: "/standard/",
      },
    ],
    // 侧边栏
    sidebar: {
      "/pages/": [
        {
          title: "使用指南",
          collapsable: true,
          path: "/pages/",
        },
        {
          title: "基于Echarts",
          collapsable: false,
          path: "/pages/echarts/chart.md",
        },
        {
          title: "基于Element UI",
          collapsable: true,
          children: [
            {
              title: "DatePicker日期选择器",
              path: "/pages/element-ui/date-picker.md",
            },
            {
              title: "Table表格",
              path: "/pages/element-ui/date-picker.md",
            },
          ],
        },
      ],
      "/standard/": [
        {
          title: "开发工具和配置",
          collapsable: true,
          path: "/standard/",
        },
        {
          title: "Vue 代码规范",
          collapsable: true,
          path: "/standard/code-lint.md",
        }
    ]
    },
  },
  plugins: ["demo-container"], // 配置插件
};
