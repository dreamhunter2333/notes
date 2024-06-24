import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DreamHunter Notes",
  description: "此生无悔入四月, 来世愿做友人A",
  lang: 'zh-CN',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://notes.dreamhunter2333.com'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      "script",
      {
        "data-ad-client": "ca-pub-8486711392183862",
        async: "true",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      }
    ]
  ],
  themeConfig: {
    outline: "deep",
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '算法',
        items: [
          {
            text: '基础',
            link: '/algorithm/algorithm-base/0_algorithm_analysis'
          }
        ]
      },
      {
        text: '基础知识',
        items: [
          {
            text: '网络基础',
            link: '/base-notes/network/0_summary'
          },
          {
            text: 'HTTP',
            link: '/base-notes/http'
          },
          {
            text: 'IO 模型',
            link: '/base-notes/socket-io'
          },
          {
            text: '计算机操作系统',
            link: '/base-notes/compute-os/0_compute-os-summary'
          },
          {
            text: 'Linux',
            link: '/base-notes/linux'
          }
        ]
      },
      {
        text: '数据库',
        items: [
          {
            text: 'SQL 语法',
            link: '/database/sql-grammar'
          },
          {
            text: '数据库系统原理',
            link: '/database/database-system-theory'
          },
          {
            text: 'MySQL',
            link: '/database/mysql'
          },
          {
            text: 'Redis',
            link: '/database/redis'
          }
        ]
      },
      {
        text: 'Java',
        items: [
          {
            text: 'Java 基础',
            link: '/java/java-base'
          },
          {
            text: 'Java 容器',
            link: '/java/java-container'
          },
          {
            text: 'Java 并发',
            link: '/java/java-concurrent'
          }
        ]
      },
      {
        text: '源码',
        items: [
          {
            text: 'Redis SDS',
            link: '/source-code/redis-sds'
          }
        ]
      },
      {
        text: '面试',
        link: '/interview/interview'
      },
      {
        text: '作者',
        link: '/author'
      },
      {
        text: '参考资料',
        items: [
          {
            text: 'www.cyc2018.xyz',
            link: 'https://www.cyc2018.xyz'
          },
          {
            text: 'doocs.github.io',
            link: 'https://doocs.github.io'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dreamhunter2333/notes' }
    ],
    footer: {
      copyright: 'Copyright © 2023 DreamHunter'
    }
  }
})
