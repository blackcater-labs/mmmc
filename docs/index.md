---
layout: home

hero:
  image:
    src: /logo.png
    alt: Mmmc
  name: "Mmmc"
  text: "Software for organizing your comics"
  tagline: Beautiful · Powerful · Open-Source
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/blackcater-labs/mmmc
      target: _black

features:
  - icon: <span class="i-mdi:cloud-off-outline"></span>
    title: Save Local
    details: All your resources are saved locally, no need to worry about privacy.
  - icon: <span class="i-mdi:web-check"></span>
    title: Read Online
    details: You can read your comics everywhere, even on your phone.
  - icon: <span class="i-mdi:folder-search"></span>
    title: Explore & Search
    details: Explore your comics and search for the one you want to read.
  - icon: <span class="i-mdi:api"></span>
    title: OpenAPI
    details: You can use OpenAPI to develop your own client.
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
