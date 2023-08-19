---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/dreamhunter2333.png',
    name: 'dreamhunter2333',
    title: 'Author',
    links: [
      { icon: 'github', link: 'https://github.com/dreamhunter2333' },
      { icon: 'twitter', link: 'https://twitter.com/dreamhunter2333' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      作者
    </template>
    <template #lead>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
