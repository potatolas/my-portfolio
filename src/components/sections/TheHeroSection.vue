<template>
  <div class="mx-auto flex">
    <div
      class="brutal-bg brutal-shadow group init-group rounded-xl border-2 p-12"
      ref="container"
    >
      <div class="flex items-center gap-8">
        <div class="flex items-center justify-center">
          <div
            class="brutal-shadow box-hover-effect absolute ml-1 h-40 w-40 border-2 bg-[#f8cb46] transition-all"
            ref="box"
          />
          <img
            class="img-hover-effect relative h-48 transition-all"
            ref="img"
            :src="avatar"
          />
        </div>
        <div class="gap- flex w-137.5 flex-col gap-4">
          <div class="text-lg">
            Hi, my name is
            <span
              class="underline decoration-dashed decoration-1 underline-offset-4"
            >
              Nicholas Yeo.
            </span>
          </div>
          <div
            class="flex flex-col gap-2 text-6xl font-semibold text-[#282825]"
          >
            <div>I am a</div>
            <div>
              <TypewriterText
                :font-size="'60px'"
                :words="[
                  'Software Engineer.',
                  'Web Developer.',
                  'AI Native Developer.',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TypewriterText from "../common/TypewriterText.vue";
import avatar from "../../assets/avatar.svg";
import { onMounted, ref } from "vue";

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    if (container.value) {
      container.value.classList.remove("init-group");
    }
  }, 300);
});
</script>

<style scoped>
.init-group .box-hover-effect,
.group:hover .box-hover-effect {
  margin-top: -4px;
  height: 192px;
  border-radius: 32px;
  transform: translate(8px, 8px);
  -webkit-box-shadow: 0px 0px 0px 0px #000000;
  box-shadow: 0px 0px 0px 0px #000000;
}

.init-group .img-hover-effect,
.group:hover .img-hover-effect {
  transform: translate(8px, 8px);
}
</style>
