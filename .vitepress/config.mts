import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GabrielTremblay', link: '/gabriel-tremblay' }
    ],

    sidebar: [
      {
        text: 'REVUE DE CODE',
        items: [
          { text: 'Gabriel Tremblay', link: '/gabriel-tremblay' }
        ]
      }
    ]
  }
})
