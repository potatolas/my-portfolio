<script setup lang="ts">
import LoopingVideo from '@/components/common/LoopingVideo.vue';
import snake from '@/assets/video/snake.webm'

const information = [
    {
        title: 'Introduction',
        desc: 'This classic Snake game is a simple and nostalgic browser game built with Vue 3. The goal is to guide the snake, collect food, and grow as long as possible without hitting the walls or yourself. Built entirely on the frontend with no backend, it demonstrates Vue 3’s reactive features while keeping the gameplay lightweight and fun.'
    },
    {
        title: 'Features',
        desc: 'On top of the classic and fun snake gameplay implementation, I added features such as Snake Speed Adjustment, Game Size Adjustment and Theme Selections.'
    },
    {
        title: 'Tech "Stack"',
        desc: 'No tech stack is involved! This game is entirely written in Vue 3 to demonstrate its reactivity.'
    },
    {
        title: 'Some cool (logic) stuff',
        desc: 'I came up with a way to move the snake which I think its quite cool. Firstly, depending on user\'s input, I will calculate where is the new space the snake will be occupying. Instead of "moving" the snake - I just delete its "tail" and add a new "head" in the new space. This creates an illusion that the snake is moving. "SetInterval" is my best friend when developing this game!'
    },
]

</script>

<template>
    <div class="fade-in h-full flex flex-col gap-8">
        <div class="text-2xl font-medium bg-[#f8cb46] p-1 px-4 rounded">Classic Snake Game</div>
        <div class="flex gap-8 min-h-0 h-full">
            <div class="w-1/3 flex flex-col justify-start shrink-0 gap-4">
                <div>
                    <LoopingVideo class="rounded-lg border-white border-2" :src="snake"></LoopingVideo>
                </div>
                <a href="https://nicholas-snek.netlify.app/">
                    <button class="brutal-bg hover:!bg-[#f8cb46] border rounded p-1 cursor-pointer w-full">↗ TRY IT!</button>
                </a>
            </div>
            <div class="h-full overflow-y-scroll grow flex flex-col gap-6 pr-4">
                <div class="flex flex-col gap-2" v-for="i of information" :key="i.title">
                    <span class="text-sm accent-text text-gray-800">{{ i.title }}</span>
                    <p class="text-lg text-[#282825]">{{ i.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>