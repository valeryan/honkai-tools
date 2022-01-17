<script lang="ts">
import { defineComponent } from "vue";
import { appStore } from "../store/app-store";

export default defineComponent({
  name: "Home",
  setup: () => {
    return {
      appState: appStore.getState(),
    };
  },
});
</script>

<template>
<h1>Home</h1>
<p>This is the homepage of Honkai Tools</p>
</template>

<style lang="scss">

</style>
