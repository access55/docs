export default defineAppConfig({
  ui: {
    primary: 'pink',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'A55 platform documentation'
  },
  header: {
    logo: {
      alt: 'A55',
      light: '/a55-blue-logo.png',
      dark: '/a55-white-logo.png'
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-line-md-home',
      to: 'https://a55.tech',
      target: '_blank',
      'aria-label': 'A55 Homepage'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      icon: 'i-line-md-home',
      to: 'https://a55.tech',
      target: '_blank',
      'aria-label': 'A55 homepage'
    }]
  },
  toc: {
    title: '',
    bottom: {
      title: '',
      edit: '',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  }
})