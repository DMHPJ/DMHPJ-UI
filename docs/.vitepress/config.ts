import { defineConfig } from "vitepress";

const base = "/DMHPJ-UI/";

export default defineConfig({
	title: "🍰兜帽虎皮卷的UI组件库",
	description: "This is DMHPJ's UI",
  base: base,
	themeConfig: {
		nav: [
			{ text: "首页", link: "/" },
			{ text: "说明文档", link: "/guide/getting-start" },
		],
		logo: undefined,
		outline: {
			label: "页面导航",
			level: "deep",
		},
		sidebar: [
			{
				text: "开发指南",
				items: [
					{ text: "快速开始", link: "/guide/getting-start" },
					// { text: "查看说明文档", link: "/api-examples" },
				],
			},
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: "/guide/basic/button" },
          { text: "Cell 单元格", link: "/guide/basic/cell" },
          { text: "Card 卡片", link: "/guide/basic/card" },
          { text: "Popup 弹出层", link: "/guide/basic/popup" },
          { text: "Toast 轻提示", link: "/guide/basic/toast" },
          { text: "Icon 图标", link: "/guide/basic/icon" },
        ],
      },
			{
				text: "表单组件",
        items: [
          { text: "Input 输入框", link: "/guide/form/input" },
          { text: "Form 表单", link: "/guide/form/form" },
          { text: "Checkbox 复选框", link: "/guide/form/checkbox" },
          { text: "Calendar 日历", link: "/guide/form/calendar" },
          { text: "Rate 评分", link: "/guide/form/rate" },
        ],
			},
			{
				text: "展示组件",
				items: [
					{ text: "Table 表格", link: "/guide/show/table" }
				]
			}
		],
		socialLinks: [{ icon: "github", link: "https://github.com/DMHPJ/DMHPJ-UI" }],
	},
});
