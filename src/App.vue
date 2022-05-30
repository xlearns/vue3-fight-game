<script setup>
import { onMounted } from "vue";
import { useRender } from "./hooks/render";
const { init, render } = useRender();
onMounted(() => {
  init(".render");
  render();
});
</script>

<template>
  <div class="render"></div>
</template>
<style>
.render {
  width: 1024px;
  height: 600px;
}
</style>
