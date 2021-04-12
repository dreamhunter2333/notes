module.exports = {
    title: 'DreamHunter Notes',
    description: 'Notes',
    theme: 'reco',
    themeConfig: {
        nav: [
            {
                text: '基础知识',
                ariaLabel: 'Base Notes',
                items: [
                    {
                        text: '计算机网络',
                        ariaLabel: 'Base Notes',
                        items: [
                            { text: '概述', link: '/base-notes/network/summary' }
                        ]
                    },
                    {
                        text: '计算机网络',
                        ariaLabel: 'Base Notes1',
                        items: [
                            { text: '概述', link: '/base-notes/network/summary' }
                        ]
                    }
                ]
            },
            {
                text: '基础知识',
                ariaLabel: 'Base Notes',
                items: [
                    {
                        text: '计算机网络',
                        ariaLabel: 'Base Notes',
                        items: [
                            { text: '概述', link: '/base-notes/network/summary' }
                        ]
                    },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'Guide', link: '/guide/' },
        ],
        smoothScroll: true,
        // subSidebar: 'auto',
        sidebar: 'auto',
        // Git 仓库和编辑链接
        repo: 'https://github.com/jinmu333', // 你的仓库
        repoLabel: 'GitHub', // 导航栏上的文本
        lastUpdated: '上次更新',
        // 备案
        record: '鲁ICP备2021007677号',
        recordLink: 'http://beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2021'
    },
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }]
    ]
}