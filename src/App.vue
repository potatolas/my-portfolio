<script setup lang="ts">
import MySkills from "./components/sections/MySkills.vue";
import TheHeroSection from "./components/sections/TheHeroSection.vue";
import TheIntroduction from "./components/sections/TheIntroduction.vue";
import { useInitFadeIn } from "./composables/init-fade";

useInitFadeIn()
</script>

<template>
  <div class="flex flex-col p-12 gap-24">
    <TheHeroSection />
    <TheIntroduction />
    <MySkills />
  </div>
</template>
