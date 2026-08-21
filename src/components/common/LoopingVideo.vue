

<template>
  <video
    ref="video"
    :src="src"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
    tabindex="-1"
    @click.prevent
    @mousedown.prevent
    @touchstart.prevent
    @contextmenu.prevent
  />
</template>

<script setup lang="ts">
defineProps<{
    src: string
}>()

</script>

<style scoped>
video {
  pointer-events: none;
}
</style>