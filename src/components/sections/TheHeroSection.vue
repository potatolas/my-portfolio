<template>
  <div class="border-2 rounded-xl brutal-bg p-12 brutal-shadow">
    <div class="flex items-center gap-2">
      <div class="flex items-center justify-center">
        <img
          :src="avatar"
          class="h-48"
        >
      </div>
      <div class="flex flex-col gap-4 w-137.5">
        <div>Hi, my name is Nicholas Yeo.</div>
        <div class="flex flex-col font-semibold text-6xl text-[#282825]">
          <div>I am a</div>
          <div>
            <TypewriterText
              :font-size="'60px'"
              :words="['Software Engineer.', 'Web Developer.', 'AI Native Developer.']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypewriterText from '../common/TypewriterText.vue';
import avatar from '../../assets/avatar.svg'
</script>