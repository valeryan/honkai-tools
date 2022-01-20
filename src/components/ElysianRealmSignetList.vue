<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Signet, SignetGroup } from "../models/signet";

export default defineComponent({
  name: "ElysianRealmSignetList",
  props: {
    signetGroup: {
      type: Object as PropType<SignetGroup>,
      require: true,
    },
  },
  methods: {
    shouldShow(signet: Signet): boolean {
      // Only Show nexus signets that are recommended
      if (signet.type == 'nexus' && (!signet.choice || signet.choice == "No"))
      {
        return false;
      }

      // Only show enhanced signets if the nexus they belong to is recommended
      if (signet.type == 'enhanced')
      {
        const nexus = this.signetGroup?.signets.find(n => n.id == signet.nexus);

        if (!nexus || !nexus.choice || nexus.choice == "No")
        {
          return false;
        }
      }

      return true;
    }
  }
});
</script>

<template>
  <div class="signets">
    <h2>{{ signetGroup?.flameChaser }} - {{ signetGroup?.name }}</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Choice</th>
      </tr>
      <template v-for="signet in signetGroup?.signets" :key="signet.id">
        <tr v-if="shouldShow(signet)">
          <td>{{ signet.name }}</td>
          <td>{{ signet.description }}</td>
          <td>{{ signet.choice }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<style lang="scss">
</style>
