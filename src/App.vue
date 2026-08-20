<script setup lang="ts">
import MySkills from "./components/sections/MySkills.vue";
import MyWorkExperience from "./components/sections/MyWorkExperience.vue";
import TheHeroSection from "./components/sections/TheHeroSection.vue";
import TheIntroduction from "./components/sections/TheIntroduction.vue";
import { useInitFadeIn } from "./composables/init-fade";
import ICONS from '@/assets/icons/skills/icons'

useInitFadeIn()

const linkedin = 'https://www.linkedin.com/in/nicholas-yeo-03038623a/'
const github = 'https://github.com/potatolas'

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <div class="flex flex-col gap-2 text-sm">
    <div class="sticky top-0 brutal-bg backdrop-blur-sm border-b shadow flex z-10 transition-opacity">
      <div class="py-2 border-r px-4">Nicholas Yeo</div>
      <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100"
              @click="scrollToSection('hero-section')">About Me</button>
      <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100"
              @click="scrollToSection('skills-section')">My Skills</button>
      <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100" @click="scrollToSection('job-section')">My
        Job Experiences</button>
      <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100">My Work</button>

      <div class="flex items-center px-4 ml-auto gap-4">
        <a :href="linkedin" target="_blank">
          <img width="20px" class="grayscale-85 opacity-80 hover:opacity-100 cursor-pointer"
               :src="ICONS.linkedInIcon" />
        </a>
        <a :href="github" target="_blank">
          <img width="20px" class="grayscale-85 opacity-80 hover:opacity-100 cursor-pointer" :src="ICONS.githubIcon" />
        </a>
      </div>
    </div>
    <div class="flex flex-col p-12 gap-24 relative mt-4">
      <TheHeroSection id="hero-section" />
      <TheIntroduction />
      <MySkills id="skills-section" />
      <MyWorkExperience id="job-section" />
    </div>
  </div>
</template>
