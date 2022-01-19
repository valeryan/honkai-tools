<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Signet } from "../../models/signet";
import Valkyrie from "../../models/valkyrie";
import { appStore } from "../../store/app-store";

export default defineComponent({
  name: "Recommendation",
  props: {
    valkyrie: {
      type: Object as PropType<Valkyrie>,
      require: true,
    },
  },
  methods: {
    getExclusive() {
      const exclusive = this.recommendation?.exclusive
      if (exclusive === undefined) {
        return;
      }
      let signets = this.getSignetsBySlug(exclusive.signet);

      if (signets === undefined) {
        return;
      }
      signets = signets.map(signet => {
        const data = exclusive.choices.find((c) => c.signetId == signet.id);
        const choice = data ? data.choice : "No";
        return {
          id: signet.id,
          name: signet.name,
          description: signet.description,
          type: signet.type,
          choice: choice
        };
      });

      return signets;
    },
    getSignetsBySlug(slug: string) {
      const groups = this.appState.signetGroups.find((s) => s.slug == slug);

      return groups?.signets;
    }
  },
  watch: {
    '$route.params': {
      handler(newValue) {
        const { slug } = newValue
        this.recommendation = this.appState.recommendations.find((r) => r.slug == slug);
      },
      immediate: true,
    }
  },
  setup: (props) => {
    const state = appStore.getState();
    const recommendation = state.recommendations.find((r) => r.slug == props.valkyrie?.slug);
    return {
      recommendation: recommendation,
      appState: state,
    };
  },
});
</script>

<template>
  <h1>{{ valkyrie?.name }}({{ recommendation?.difficulty }}D)</h1>
  <h2>Exclusive Signets</h2>
  <table>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Choice</th>
    </tr>
    <tr v-for="signet in getExclusive()">
      <td>{{ signet.name }}</td>
      <td>{{ signet.description }}</td>
      <td>{{ signet.choice }}</td>
    </tr>
  </table>
</template>
