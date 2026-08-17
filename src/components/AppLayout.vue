<template>
  <div class="w-screen h-screen flex flex-col overflow-y-auto bg-grain-stone">
    <div class="fixed top-6 left-0 right-0">
      <slot name="navBar" />
    </div>
    <slot />
  </div>
</template>


<style scoped>
.bg-grain-stone{
  background-image: url("../assets/noise-bg-2.png");
  background-repeat: repeat;
}
</style>