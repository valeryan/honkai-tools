<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Signet, SignetGroup } from "../models/signet";
import { Valkyrie } from "../models/valkyrie";
import { appStore } from "../store/app-store";
import ElysianRealmSignetList from "./ElysianRealmSignetList.vue";
import ElysianRealmSetup from "./ElysianRealmSetup.vue";
import { recommendLoader } from "../recommends";

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
    getSignetGroup(slug: string): SignetGroup | undefined {
      const choiceGroup = this.getChoiceGroupBySlug(slug);
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
    getChoiceGroupBySlug(slug: string) {
      if (this.recommendation === undefined) {
        return;
      }
      // Typescript does not like my string keys
      switch (slug) {
        case "exclusive":
          return this.recommendation.exclusive;
        case "signet1":
          return this.recommendation.signet1;
        case "signet2":
          return this.recommendation.signet2;
        case "signet3":
          return this.recommendation.signet3;
        default:
          return;
      }
    },
    getSignetGroupBySlug(slug: string | undefined) {
      if (slug === undefined) {
        return;
      }
      return this.appState.signetGroups.find((s) => s.slug == slug);
    }
  },
  watch: {
    valkyrie: {
      immediate: true,
      deep: true,
      handler(newValue) {
        recommendLoader.load(newValue);
        this.recommendation = this.appState.recommendations[0]
      }
    }
  },
  setup: (props) => {
    recommendLoader.load(props.valkyrie);

    const state = appStore.getState();
    const recommendation = state.recommendations[0];
    return {
      recommendation: recommendation,
      appState: state,
    };
  },
});
</script>

<template>
  <div id="recommendations" v-if="recommendation">
    <div class="container card">
      <div class="row">
        <h1>{{ valkyrie?.name }}({{ recommendation?.difficulty }}D)</h1>
      </div>
      <div class="row">
        <div class="setupGroup col">
          <ElysianRealmSetup :setup-group="recommendation.setup" />
        </div>
        <ElysianRealmSignetList :signet-group="getSignetGroup('exclusive')" />
      </div>
      <div class="signetGroup row">
        <ElysianRealmSignetList :signet-group="getSignetGroup('signet1')" />
        <ElysianRealmSignetList :signet-group="getSignetGroup('signet2')" />
        <ElysianRealmSignetList :signet-group="getSignetGroup('signet3')" />
      </div>
    </div>
  </div>
  <div id="recommendations" v-else>
    <h1>{{ valkyrie?.name }}</h1>
    <p>This Valkyrie does not have any recommendations.</p>
  </div>
</template>

<style lang="scss">
#recommendations {
  margin: 50px 0;
}
</style>
