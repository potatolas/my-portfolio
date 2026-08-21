<script setup lang="ts">
import TheNavBar from "./components/core/TheNavBar.vue";
import MySkills from "./components/sections/MySkills.vue";
import TheHeroSection from "./components/sections/TheHeroSection.vue";
import TheIntroduction from "./components/sections/TheIntroduction.vue";
import JobExperience from "./components/sections/JobExperience.vue";
import { useInitFadeIn } from "./composables/init-fade";
import MyWork from "./components/sections/MyWork/MyWork.vue";
import { ref, watch } from "vue";

useInitFadeIn()

const myWorkVisible = ref(false)

watch(myWorkVisible, (v) => {
  if (v) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = ''
  }
})

</script>

<template>
  <div class="flex flex-col gap-2 text-sm">
    <TheNavBar @open-work="myWorkVisible = true" />
    <div class="flex flex-col p-12 gap-24 relative mt-4">
      <TheHeroSection id="hero-section" />
      <TheIntroduction />
      <MySkills id="skills-section" />
      <JobExperience id="job-section" />
      <MyWork v-if="myWorkVisible" @back="myWorkVisible = false" />
    </div>
  </div>
</template>
