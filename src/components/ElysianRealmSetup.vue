<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GamePeriod, Slots } from "../models/recommendation";
import { appStore } from "../store/app-store";

export default defineComponent({
  name: "ElysianRealmSetup",
  props: {
    setupGroup: {
      type: Object as PropType<GamePeriod>,
      require: true,
    },
  },
  methods: {
    getEmblem(slots: Slots) {
      var emblem1 = this.appState.emblems.find(e => e.id == slots.slot1);
      var emblems = emblem1?.name;
      if (slots.slot2 !== undefined) {
        var emblem2 = this.appState.emblems.find(e => e.id == slots.slot2);
        emblems = emblems + " / " + emblem2?.name;
      }
      return emblems;
    },
    getSupport(slots: Slots, position: number) {
      var slot: number = slots["slot" + position];
      var support = this.appState.supports.find(s => s.id == slot);
      return support?.name;
    }
  },
  setup: () => {
    return {
      appState: appStore.getState(),
    };
  }
});
</script>

<template>
  <table v-if="setupGroup" class="table table-striped">
    <thead>
      <tr>
        <th>Time</th>
        <th>Emblem</th>
        <th>Support 1</th>
        <th>Support 2</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Early</td>
        <td>{{ getEmblem(setupGroup.early.emblem) }}</td>
        <td>{{ getSupport(setupGroup.early.support, 1) }}</td>
        <td>{{ getSupport(setupGroup.early.support, 2) }}</td>
      </tr>

      <tr>
        <td>Mid</td>
        <td>{{ getEmblem(setupGroup.mid.emblem) }}</td>
        <td>{{ getSupport(setupGroup.mid.support, 1) }}</td>
        <td>{{ getSupport(setupGroup.mid.support, 2) }}</td>
      </tr>

      <tr>
        <td>Late</td>
        <td>{{ getEmblem(setupGroup.late.emblem) }}</td>
        <td>{{ getSupport(setupGroup.late.support, 1) }}</td>
        <td>{{ getSupport(setupGroup.late.support, 2) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
</style>
