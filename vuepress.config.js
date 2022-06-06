const { path } = require('@vuepress/utils')

module.exports = {
    title: 'DreamHunter Notes',
    description: '此生无悔入四月，来世愿做友人A',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        [
            "script",
            {
                "data-ad-client": "ca-pub-8486711392183862",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
            }
        ]
    ],
    themeConfig: {
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '算法',
                children: [
                    {
                        text: '基础',
                        link: '/algorithm/algorithm-base/0_algorithm_analysis'
                    }
                ]
            },
            {
                text: '基础知识',
                children: [
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
                children: [
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
                children: [
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
                children: [
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
                text: '参考资料',
                children: [
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
        author: 'Dreamhunter',
        smoothScroll: true,
        sidebar: 'auto',
        // Git 仓库和编辑链接
        repo: 'https://github.com/jinmu333/vuepress-notes', // 你的仓库
        repoLabel: 'GitHub', // 导航栏上的文本
        editLink: false,
        contributors: false,
        lastUpdatedText: '上次更新',
        // 项目开始时间，只填写年份
        startYear: '2021'
    },
    plugins: [
        ['@vuepress/pwa', { skipWaiting: true }],
        ['@vuepress/plugin-search', {}],
        ['@jinmu333/vuepress-plugin-sitemap', {
            hostname: 'https://notes.dreamhunter2333.com'
        }]
    ]
}
