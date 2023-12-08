---
layout: home

hero:
  image:
    src: /logo.png
    alt: Mmmc
  name: "Mmmc"
  text: "用于组织您的漫画的软件"
  tagline: Eazy · Powerful · Extensible
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: Github 源码
      link: https://github.com/blackcater-labs/krawl
      target: _black

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembers } from '../.vitepress/contributors'
</script>

<div class="container mx-auto">
  <main class="main">
    <section flex flex-col items-center mt-10>
      <h2 id="meet-the-team" text="2xl" op70 font-bold p="t-10 b-2">
        认识我们的团队
      </h2>
      <div p-10>
        <VPTeamMembers size="medium" :members="teamMembers" />
      </div>
    </section>
  </main>
</div>
