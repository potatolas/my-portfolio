<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    fontSize?: string;
    words: string[];
  }>(),
  {
    fontSize: "24px",
  },
);

const currentWord = ref<string>("");

let wordIndex = 0;
let timeout: ReturnType<typeof setTimeout>;

const typeWord = (): void => {
  const word = props.words[wordIndex];

  if (currentWord.value.length < word.length) {
    currentWord.value = word.slice(0, currentWord.value.length + 1);

    timeout = setTimeout(typeWord, 100);
  } else {
    timeout = setTimeout(deleteWord, 2000);
  }
};

const deleteWord = (): void => {
  if (currentWord.value.length > 0) {
    currentWord.value = currentWord.value.slice(0, -1);

    timeout = setTimeout(deleteWord, 50);
  } else {
    wordIndex = (wordIndex + 1) % props.words.length;

    timeout = setTimeout(typeWord, 500);
  }
};

onMounted(() => {
  typeWord();
});

onUnmounted(() => {
  clearTimeout(timeout);
});
</script>

<template>
  <span class="font-title flex items-center">
    <span
      class="leading-0"
      :style="{ fontSize: fontSize }"
    >
      <span>{{ currentWord }}</span>
    </span>
    <span
      :style="{ height: fontSize }"
      class="ml-1 inline-block w-0.5 align-middle bg-current animate-pulse"
    />
  </span>
</template>

<style scoped>
@keyframes pulse {
  50% {
    opacity: 0.2;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
