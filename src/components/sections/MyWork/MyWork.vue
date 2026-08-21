<template>
    <div class="fixed inset-0 p-8 bg-white/40 backdrop-blur-md z-20">
        <div class="flex gap-8 h-full">
            <div class="flex flex-col gap-4">
                <button class="brutal-bg brutal-shadow rounded-xl border-2 p-2 text-left flex gap-2 items-center"
                        @click="emit('back')">
                    <img :src="back" class="w-8" />
                    <span class="text-lg font-light">BACK</span>
                </button>
                <div class="brutal-bg brutal-shadow rounded-xl border-2 p-8 flex flex-col gap-8 mb-auto">
                    <div class="text-4xl font-light text-center whitespace-nowrap">My Work</div>
                    <div class="flex flex-col gap-4" v-for="t, i of works" :key="i">
                        <div class="text-xs opacity-80 tracking-wide font-light">{{ (worksTitle[i] || '').toUpperCase() }}</div>
                        <div class="flex-col flex gap-4 items-start text-xs" v-for="w of t">
                            <button class="p-2 rounded border w-full transition-colors whitespace-nowrap"
                                    :class="w.key === activeTab ? 'bg-[#f8cb46]' : 'hover:bg-[#f8cc4680]'"
                                    @click="activeTab = w.key">
                                {{ w.label }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="brutal-bg brutal-shadow rounded-xl border-2 p-8 flex flex-col gap-8 grow h-full">
                <component :is="activeComponent"></component>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import type { Component } from 'vue'
import back from '@/assets/back.svg'

const emit = defineEmits(['back'])

type WorkItemKey = 'classic-snake-game' | 'tv-review' | 'ai-convo' | 'cloud-monitoring'

type WorkItem = {
    key: WorkItemKey,
    label: string,
    component: Component,
}

const worksTitle = {
    'personal': 'Personal',
    'job': 'Job Related'
}

const works = ref<{
    personal: WorkItem[],
    job: WorkItem[]
}>({
    personal: [{
        key: 'classic-snake-game',
        label: 'Classic Snake Game',
        component: defineAsyncComponent(
            () => import('./work-component/SnakeGame.vue')
        ),
    },
    {
        key: 'tv-review',
        label: 'TV Review App',
        component: defineAsyncComponent(
            () => import('./work-component/TvReviewApp.vue')
        ),
    }],
    job: [{

        key: 'ai-convo',
        label: 'AI Agents',
        component: defineAsyncComponent(
            () => import('./work-component/AIAgents.vue')
        ),
    },
    // {
    //     key: 'cloud-monitoring',
    //     label: 'Cloud Monitoring System',
    //     component: defineAsyncComponent(
    //         () => import('./work-component/Placeholder.vue')
    //     ),
    // }
    ]
}
)

const activeTab = ref<WorkItemKey>('classic-snake-game')

const activeComponent = computed(() => {
    return Object.values(works.value).flat().find(w => w.key === activeTab.value)?.component
})
</script>

<style scoped>
button {
    @apply cursor-pointer
}

:deep(.accent-text) {
    @apply underline underline-offset-4 decoration-dashed decoration-2 decoration-[#f8cb46];
}
</style>