<template>
  <div class="w-full h-full p-12 flex shrink-0 bg-grain-stone">
    <div class="flex flex-col justify-center gap-8 h-full">
      <div class="flex items-center">
        <img
          :src="avatar"
          class="h-58"
        >
        <div class="font-title flex flex-col tracking-widest">
          <div class="text-[72px] text-gray-800 font-light">
            Hey! I'm <span class="text-stone-700 font-medium">Nicholas Yeo</span>,
          </div>
          <div class="flex gap-2">
            <span class="text-[72px] text-gray-800 font-light">a</span>
            <TypewriterText
              :font-size="'72px'"
              :class="'text-gray-800'"
              :words="occupations"
            />
          </div>
        </div>
      </div>

      <div
        class="mx-12 font-body text-lg leading-[200%] text-stone-800 rounded tracking-wide flex gap-4"
      >
        <div class="h-full border-r-2 border-[#C15B43] opacity-80 rounded" />
        <div>{{ shortIntro }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypewriterText from "./common/TypewriterText.vue";
import avatar from "../assets/avatar.svg";

const occupations = [
  "Web Developer.",
  "AI-Native Developer.",
  "Software Engineer.",
  "Frontend Developer.",
  "Full Stack Developer.",
];

const shortIntro = `I am an aspiring engineer with experience in building scalable systems using JavaScript on cloud platforms. I am passionate about frontend and web development.
Currently working at an AI solutions firm, I’m expanding my expertise at the intersection of web development and modern AI implementation. I look forward to further developing my skills in a professional environment.`;
</script>

<style scoped>
.bg-grain-stone{
  background-image: url("../assets/noise-bg.png");
  background-repeat: repeat;
}
</style>