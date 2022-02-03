<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Signet, SignetGroup } from "../models/signet";
import { Valkyrie } from "../models/valkyrie";
import { appStore } from "../store/app-store";
import ElysianRealmSignetList from "./ElysianRealmSignetList.vue";
import ElysianRealmSetup from "./ElysianRealmSetup.vue";
import { recommendLoader } from "../recommends";
import { Recommend } from "../models/recommend";

export default defineComponent({
  name: "ElysianRealmRecommend",
  props: {
    valkyrie: {
      type: Object as PropType<Valkyrie>,
      require: true,
    },
  },
  components: {
    ElysianRealmSignetList,
    ElysianRealmSetup
  },
  methods: {
    findVariantName(totalRecommends: number, recommend: Recommend): string {
      if (totalRecommends <= 1) {
        return "";
      }
      return recommend.variant ? recommend.variant : "Variant " + recommend.id
    },
    getSignetGroup(slug: string, recommend: Recommend): SignetGroup | undefined {
      const choiceGroup = this.getChoiceGroupBySlug(slug, recommend);
      const signetGroup = this.getSignetGroupBySlug(choiceGroup?.signet);
      if (choiceGroup === undefined || signetGroup === undefined) {
        return;
      }
      const signets: Signet[] = signetGroup.signets.map(signet => {
        const data = choiceGroup.choices.find((c: { signetId: number; }) => c.signetId == signet.id);
        const choice = data ? data.choice : "No";
        return { ...signet, choice };
      });

      return { ...signetGroup, signets };
    },
    getChoiceGroupBySlug(slug: string, recommend: Recommend) {
      // Typescript does not like my string keys
      switch (slug) {
        case "exclusive":
          return recommend.exclusive;
        case "signet1":
          return recommend.signet1;
        case "signet2":
          return recommend.signet2;
        case "signet3":
          return recommend.signet3;
        default:
          return;
      }
    },
    getSignetGroupBySlug(slug: string | undefined) {
      if (slug === undefined) {
        return;
      }
      return this.appState.signetGroups.find((s) => s.slug == slug);
    },
    setActiveRecommend(recommend: Recommend) {
      const active = { ...recommend, isActive: true };
      const recommends = this.recommends.map(rec => {
        if (rec.id === active.id) {
          return { ...rec, isActive: true };
        }
        return { ...rec, isActive: false }
      });
      this.recommends = recommends;
      console.log("active");
      console.log(recommends);
    }
  },
  watch: {
    valkyrie: {
      immediate: true,
      deep: true,
      handler(newValue) {
        recommendLoader.load(newValue);
        this.recommends = appStore.getState().recommendations;
        this.setActiveRecommend(this.recommends[0]);
        console.log("watch");
      }
    }
  },
  setup: (props) => {
    recommendLoader.load(props.valkyrie);
    const state = appStore.getState();
    let recommends = ref(state.recommendations);
    console.log("setup");
    return {
      appState: state,
      recommends
    };
  },
});
</script>

<template>
  <h1>{{ valkyrie ? valkyrie.battleSuit + " - " + valkyrie.name : ""}}</h1>
  <template id="tabs" v-if="recommends.length > 1">
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" v-for="recommend in recommends" class="nav-item">
        <a
          href="#"
          @click.stop.prevent="setActiveRecommend(recommend)"
          :class="{ active: recommend.isActive }"
          class="nav-link"
        >{{ findVariantName(recommends.length, recommend) }}</a>
      </li>
    </ul>
  </template>
  <div v-if="recommends.length > 0" id="recommendations" class="tab-content">
    <div
      v-for="recommend in recommends"
      :key="recommend.id"
      class="tab-pane fade"
      :class="{ show: recommend.isActive, active: recommend.isActive }"
    >
      <div class="row">
        <h2>{{ recommend.difficulty + 'D' }} {{ findVariantName(recommends.length, recommend) }}</h2>
      </div>
      <div class="row">
        <div class="col-5">
          <ElysianRealmSetup :setup-group="recommend.setup" />
          <ElysianRealmSignetList :signet-group="getSignetGroup('exclusive', recommend)" />
        </div>
        <div class="col">
        <ElysianRealmSignetList :signet-group="getSignetGroup('signet1', recommend)" />
        <ElysianRealmSignetList :signet-group="getSignetGroup('signet2', recommend)" />
        <ElysianRealmSignetList :signet-group="getSignetGroup('signet3', recommend)" />
      </div>
      </div>

    </div>
  </div>
  <div id="recommendations" v-else>
    <p>This Valkyrie does not have any recommendations.</p>
  </div>
</template>

<style lang="scss">
#recommendations {
  margin: 50px 0;
}
</style>
