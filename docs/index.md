---
layout: home

hero:
  image:
    src: /logo.png
    alt: Mmmc
  name: "Mmmc"
  text: "Software for organizing your comics"
  tagline: Archive · Manage · Read
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/blackcater-labs/mmmc
      target: _black

features:
  - icon: <span class="i-mdi:language-typescript"></span>
    title: TypeScript
    details: Built in TypeScript to improve the development experience
---

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembers } from './.vitepress/contributors'
</script>

<div class="container mx-auto">
  <main class="main">
    <section flex flex-col items-center mt-10>
      <h2 id="meet-the-team" text="2xl" op70 font-bold p="t-10 b-2">
        Meet Our Team
      </h2>
      <div p-10>
        <VPTeamMembers size="medium" :members="teamMembers" />
      </div>
    </section>
  </main>
</div>
