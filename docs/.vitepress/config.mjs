import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Serein Documents',
	description: 'Serein Documents',
	base: '/Docs/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		socialLinks: [{ icon: 'github', link: 'https://github.com/SereinMC/serein' }]
	},
	locales: {
		root: {
			label: '简体中文',
			lang: 'zh-CN',
			themeConfig: {
				nav: [
					{ text: '首页', link: '/' },
					{ text: '指南', link: '/intro' }
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
			}
		},
		en: {
			label: 'English',
			lang: 'en',
			link: '/en/',
			themeConfig: {
				nav: [
					{ text: 'Home', link: '/en/' },
					{ text: 'Guideline', link: '/en/intro' }
				],
			}
			// other locale specific properties...
		}
	}
});
