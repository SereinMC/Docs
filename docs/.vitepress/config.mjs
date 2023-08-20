import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Serein Documents',
	description: 'Serein Documents',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/intro' }
		],

		sidebar: [
			{
				text: 'Serein Documents',
				items: [
					{ text: '安装与配置', link: '/intro' },
					{ text: '创建或导入项目', link: '/project' },
					{ text: '构建和打包资源包', link: '/build' },
					{ text: '模块管理', link: '/module' },
					{ text: '配置文件功能', link: '/info' }
				]
			}
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/SereinMC/serein' }]
	}
});
