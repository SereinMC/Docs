import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Serein Doc",
  description: "Serein Document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Serein Doc',
        items: [
          { text: 'Getting start', link: '/intro' },
          { text: 'Guide', link: '/guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SereinMC/serein' }
    ]
  }
})
