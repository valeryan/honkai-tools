<script lang="ts">
import { defineComponent } from "vue";
import { appStore } from "../store/app-store";
import ElysianRealmRecommend from "./ElysianRealmRecommend.vue";

export default defineComponent({
  name: "ElysianRealm",
  methods: {
    getImageUrl: (slug: string) => {
      return new URL(`../assets/valkyries/${slug}.png`, import.meta.url)
        .href;
    },
  },
  computed: {
    foundValkyrie() {
      const slug = this.$route.params.slug;
      const valk = this.appState.valkyries?.find((v) => v.slug == slug);
      return valk;
    },
  },
  components: {
    ElysianRealmRecommend
  },
  setup: () => {
    return {
      appState: appStore.getState(),
    };
  },
});
</script>

<template>
  <h1>Elysian Realm</h1>
  <nav>
    <ul>
      <li v-for="valk in appState.valkyries" :key="valk.id">
        <router-link :to="{ name: 'ElysianRealm', params: { slug: valk.slug } }">
          <img class="valk-img" :alt="valk.name" :src="getImageUrl(valk.slug)" />
          {{ valk.name }}
        </router-link>
      </li>
    </ul>
  </nav>
  <ElysianRealmRecommend v-if="foundValkyrie" :valkyrie="foundValkyrie" />
</template>

<style lang="scss">
.valk-img {
  max-width: 100px;
  max-height: 100px;
}
</style>
