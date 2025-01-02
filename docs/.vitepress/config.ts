import { defineConfig } from "vitepress";

const base = "/DMHPJ-UI/";

export default defineConfig({
	title: "🍰兜帽虎皮卷的UI组件库",
	description: "This is DMHPJ's UI",
  base: base,
	themeConfig: {
		nav: [
			{ text: "首页", link: `${base}` },
			{ text: "说明文档", link: `${base}markdown-examples` },
		],

		sidebar: [
			{
				text: "开发指南",
				items: [
					{ text: "快速开始", link: `${base}/guide/getting-start` },
					{ text: "查看说明文档", link: `${base}/api-examples` },
				],
			},
      {
        text: "基础组件",
        items: [
          { text: "Button 按钮", link: `${base}/guide/basic/button` },
        ],
      }
		],

		socialLinks: [{ icon: "github", link: "https://github.com/DMHPJ/DMHPJ-UI" }],
	},
});
