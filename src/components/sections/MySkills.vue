<template>
  <div class="flex flex-col items-center gap-8 p-12">
    <div class="flex flex-col items-center gap-2 fade-in-on-seen">
      <div class="text-6xl font-semibold text-[#282825]">What can I do?</div>
      <div class="text-lg text-[#282825]">My skills include...</div>
    </div>
    <div class="flex w-full gap-8 flex-wrap justify-center">
      <div v-for="(cat, i) of skills" :key="cat.title"
           class="brutal-bg brutal-shadow min-w-85 rounded-lg border-2 skill-item-container relative overflow-hidden fade-in-on-seen">
        <div class="text-xl p-3 bg-red-100 rounded-t font-light text-center tracking-widest" :style="{
          background: `color-mix(in srgb, ${colors[i % colors.length]} 50%, transparent)`
        }">
          {{ cat.title.toUpperCase() }}
        </div>
        <div class="gap-2 flex flex-col p-4">
          <div v-for="skill of cat.items" :key="skill.text" class="flex w-full justify-center group">
            <div class="shrink-0 group-hover:underline underline-offset-4 decoration-dashed decoration-2 cursor-default"
                 :style="{ textDecorationColor: colors[i % colors.length] }">{{ skill.text }}</div>
            <div class="skill-item-gap transition-all duration-500"></div>
            <div v-if="skill.image"
                 class="absolute bottom-4 right-4 opacity-0 h-14 group-hover:opacity-40 transition-all flex justify-end grayscale-50">
              <img :src="skill.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import ICONS from '@/assets/icons/skills/icons'

const colors = [
  '#91a8eb',
  '#f8cb46',
  '#fe91e8',
  '#48ea85',
  '#e94f8a',
]
const skills = [
  {
    title: 'Languages',
    items: [
      { text: 'JavaScript, HTML & CSS', image: ICONS.javascriptIcon },
      { text: 'TypeScript', image: ICONS.typescriptIcon },
      { text: 'Python', image: ICONS.pythonIcon },
      { text: 'Java', image: ICONS.javaIcon },
    ],
  },

  {
    title: 'Frontend Development',
    items: [
      { text: 'Vue 3', image: ICONS.vueIcon },
      { text: 'React', image: ICONS.reactIcon },
      { text: 'Vite', image: ICONS.viteIcon },
      { text: 'Cypress', image: ICONS.cypressIcon },
    ],
  },

  {
    title: 'Data',
    items: [
      { text: 'MongoDB', image: ICONS.mongoIcon },
      { text: 'SQL', image: ICONS.sqlIcon },
      { text: 'Redis' },
    ],
  },

  {
    title: 'Web Development',
    items: [
      { text: 'Node.js', image: ICONS.nodeIcon },
      { text: 'Express.js', image: ICONS.expressIcon },
      { text: 'Nginx', image: ICONS.nginxIcon },
      { text: 'FastAPI' },
      { text: 'Jest', image: ICONS.jestIcon },
    ],
  },

  {
    title: 'Processes',
    items: [
      { text: 'Agile' },
      { text: 'Scrum' },
      { text: 'JIRA', image: ICONS.jiraIcon },
    ],
  },

  {
    title: 'Others',
    items: [
      { text: 'OOP' },
      { text: 'Spark AR', image: ICONS.sparkIcon },
      { text: 'Unity', image: ICONS.unityIcon },
      { text: 'WordPress', image: ICONS.wordpressIcon },
    ],
  },

  {
    title: 'Tools',
    items: [
      { text: 'Figma', image: ICONS.figmaIcon },
      { text: 'Vite', image: ICONS.viteIcon },
      { text: 'pnpm, yarn', image: ICONS.pnpmIcon },
      { text: 'Docker', image: ICONS.dockerIcon },
      { text: 'Kubernetes', image: ICONS.kubernetesIcon },
      { text: 'RabbitMQ', image: ICONS.rabbitIcon },
      { text: 'Git', image: ICONS.gitIcon },
      { text: 'Bitbucket Pipelines', image: ICONS.bitbucketIcon },
      { text: 'GitLab Pipelines' },
      { text: 'Cursor, Claude Code' },
    ],
  },
]
</script>

<style scoped>
.skill-item-container .skill-item-gap {
  width: 0;
}

.skill-item-container:hover .skill-item-gap {
  width: 100%;
}
</style>