Mock.setup({
  timeout: "200-500",
});

const data = Mock.mock({
  "list|100": [
    {
      "id|+1": 1,
      name: "@cname",
      "age|18-70": 1,
      "gender|1": ["男", "女"],
      avatar:
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      address: "@county(true)",
      number: "@natural",
      startDate: "@datetime()",
    },
  ],
});

Mock.mock("/api/page", "post", (req) => {
  const { pageSize, pageNum } = JSON.parse(req.body);
  const start = (pageNum - 1) * pageSize;
  const end = start + pageSize;
  const total = data.list.length;
  const records = data.list.slice(start, end);
  return {
    code: 0,
    data: {
      pageNum,
      pageSize,
      total,
      records,
    },
    msg: "成功",
  };
});
