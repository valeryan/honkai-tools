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
    isActiveLink(slug: string) {
      return slug === this.$route.params.slug;
    }
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
    <ul class="nav">
      <li v-for="valk in appState.valkyries" :key="valk.id" class="nav-item">
        <router-link
          :to="{ name: 'ElysianRealm', params: { slug: valk.slug } }"
          :class="{ active: isActiveLink(valk.slug) }"
          class="nav-link text-center"
        >
          <img class="valk-img" :alt="valk.battleSuit" :src="getImageUrl(valk.slug)" />
          <span>{{ valk.battleSuit }}</span>
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
.nav-link {
  max-width: 170px;
  span {
    text-align: center;
    display:block;
  }
}
</style>
