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
		'zh-CN': {
			label: '简体中文',
			lang: 'zh-CN',
			link: '/zh-CN/',
			themeConfig: {
				nav: [
					{ text: '首页', link: '/zh-CN/' },
					{ text: '指南', link: '/zh-CN/intro' }
				],
				sidebar: [
					{
						text: 'Serein Documents',
						items: [
							{ text: '安装与配置', link: '/zh-CN/intro' },
							{ text: '创建或导入项目', link: '/zh-CN/project' },
							{ text: '构建和打包资源包', link: '/zh-CN/build' },
							{ text: '模块管理', link: '/zh-CN/module' },
							{ text: '配置文件功能', link: '/zh-CN/info' }
						]
					}
				],
			}
		},
		root: {
			label: 'English',
			lang: 'en',
			themeConfig: {
				nav: [
					{ text: 'Home', link: '/' },
					{ text: 'Guideline', link: '/intro' }
				],
				sidebar: [
					{
						text: "Serein Documents",
						items: [
							{ text: "Installation and Configuration", link: "/intro" },
							{ text: "Creating or Importing Projects", link: "/project" },
							{ text: "Building and Packaging Resource Packs", link: "/build" },
							{ text: "Module Management", link: "/module" },
							{ text: "Configuration File Features", link: "/info" }
						]
					}
				]

			}
		}
	}
});
