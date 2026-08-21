<template>
    <div class="flex items-center justify-center fade-in-on-seen">
        <div class="brutal-bg brutal-shadow rounded-xl border-2 p-8 flex flex-col gap-8">
            <div class="flex gap-2 flex-col leading-8 text-lg">
                <div class="text-4xl font-semibold">About me</div>
                <div v-html="shortIntro"></div>
                <div v-html="educationIntro"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const shortIntro = `Hey, I'm Nicholas! I am an aspiring engineer with experience in building scalable systems using <span class="accent-text">JavaScript</span> on cloud platforms. I am passionate about <span class="accent-text">frontend and web development</span>.
Currently working at an AI solutions firm, I’m expanding my expertise at the intersection of web development and modern <span class="accent-text">AI</span> implementation. I look forward to further developing my skills in a professional environment.`

const educationIntro = `I earned a <span class="accent-text">Bachelor of Engineering (Computer Science)</span> from Nanyang Technological University from 2018 to 2022, graduating with a GPA of <span class="accent-text">4.52</span> and Honours (Highest Distinction).`
</script>

<style scoped>
:deep(.accent-text) {
    @apply underline underline-offset-4 decoration-dashed decoration-2 decoration-[#f8cb46];
}
</style>