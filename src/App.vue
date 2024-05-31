<template>
  <div class=" w-full">
    <!-- header -->
    <TheHeading />
    <!-- body -->
    <div class="md:px-10">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TheHeading from './components/TheHeading.vue';
</script>
