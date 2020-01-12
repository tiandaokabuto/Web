export const menu = [
	{
		ID: "0",
		NAME: "我的命令",
		CHILDREN: []
	},
	{
		ID: "1",
		NAME: "共享命令",
		CHILDREN: []
	},
	{
		ID: "2",
		NAME: "基本命令",
		CHILDREN: [
			{
				ID: "20",
				NAME: "基本命令",
				CHILDREN: [
					{
						ID: "200",
						NAME: "延时",
						CHILDREN: []
					},
					{
						ID: "201",
						NAME: "转为逻辑数据",
						CHILDREN: []
					},
					{
						ID: "202",
						NAME: "转为小数数据",
						CHILDREN: []
					},
					{
						ID: "203",
						NAME: "转为整数数据",
						CHILDREN: []
					},
					{
						ID: "204",
						NAME: "转为文字数据",
						CHILDREN: []
					}
				]
			},
			{
				ID: "21",
				NAME: "语法词法",
				CHILDREN: []
			},
			{
				ID: "22",
				NAME: "日志",
				CHILDREN: []
			}
		]
	}
];
