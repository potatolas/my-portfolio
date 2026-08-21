<template>
    <div class="sticky top-0 brutal-bg backdrop-blur-sm border-b shadow flex z-10 transition-opacity">
        <div class="py-2 border-r px-4">Nicholas Yeo</div>
        <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100"
                @click="scrollToSection('hero-section')">About Me</button>
        <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100"
                @click="scrollToSection('skills-section')">My Skills</button>
        <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100" @click="scrollToSection('job-section')">My
            Job Experiences
        </button>
        <button class="px-4 py-2 cursor-pointer opacity-40 hover:opacity-100" @click="emit('open-work')">
            My Work
        </button>

        <div class="flex items-center px-4 ml-auto gap-4">
            <a :href="linkedin" target="_blank">
                <img width="20px" class="grayscale-85 opacity-80 hover:opacity-100 cursor-pointer"
                     :src="ICONS.linkedInIcon" />
            </a>
            <a :href="github" target="_blank">
                <img width="20px" class="grayscale-85 opacity-80 hover:opacity-100 cursor-pointer"
                     :src="ICONS.githubIcon" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import ICONS from '@/assets/icons/skills/icons'
const linkedin = 'https://www.linkedin.com/in/nicholas-yeo-03038623a/'
const github = 'https://github.com/potatolas'

const emit = defineEmits(['open-work'])

const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}
</script>