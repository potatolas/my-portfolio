<script setup lang="ts">
import AppLayout from './components/AppLayout.vue';
import TheNavBar from './components/TheNavBar.vue';
import TheHero from './components/TheHero.vue';
import MyEducation from './components/MyEducation.vue';
import MyWorkExperience from './components/MyWorkExperience.vue';
</script>

<template>
  <AppLayout>
    <template #navBar>
      <TheNavBar />
    </template>
    <TheHero />
    <MyEducation />
    <MyWorkExperience />
  </AppLayout>
</template>
