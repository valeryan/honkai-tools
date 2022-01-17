<script lang="ts">
import { onMounted, defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup: () => {
    onMounted(() => {
      console.log("App mounted");
    });
  },
});
</script>

<template>
  <suspense>
    <template #default>
      <img alt="Vue logo" src="./assets/logo.png" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
