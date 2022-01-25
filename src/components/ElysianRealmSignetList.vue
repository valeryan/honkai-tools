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
    shouldShowSignet(signet: Signet): boolean {
      // Only Show nexus signets that are recommended
      if (signet.type == 'nexus' && (!signet.choice || signet.choice == "No")) {
        return false;
      }

      // Only show enhanced signets if the nexus they belong to is recommended
      if (signet.type == 'enhanced') {
        const nexus = this.signetGroup?.signets.find(n => n.id == signet.nexus);

        if (!nexus || !nexus.choice || nexus.choice == "No") {
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
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="signet-name">Name</th>
          <th class="signet-desc">Description</th>
          <th class="signet-choice">Choice</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="signet in signetGroup?.signets" :key="signet.id">
          <tr v-if="shouldShowSignet(signet)">
            <td class="signet-name">{{ signet.name }}</td>
            <td class="signet-desc">{{ signet.description }}</td>
            <td class="signet-choice">{{ signet.choice }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
  .signet-name {
    width: 25%;
  }
  .signet-desc {
    width: 65%;
  }
  .signet-choice {
    width: 10%;
  }
</style>
