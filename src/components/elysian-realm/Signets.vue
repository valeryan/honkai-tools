<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Signet, SignetGroup } from "../../models/signet";

export default defineComponent({
  name: "Signets",
  props: {
    signetGroup: {
      type: Object as PropType<SignetGroup>,
      require: true,
    },
  },
  methods: {
    shouldShow(signet: Signet) {
      if (signet.type == 'nexus' && (!signet.choice || signet.choice == "No"))
      {
        return false;
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
      <template v-for="signet in signetGroup?.signets">
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
