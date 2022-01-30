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
      // Only Show core nexus signets that are recommended
      if (signet.type.toLowerCase() == 'core' && (!signet.choice || signet.choice == "No")) {
        return false;
      }

      // Only show enhanced signets if the nexus they belong to is recommended
      if (signet.type.toLowerCase() == 'enhanced') {
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
  <div class="signets col">
    <div class="card">
      <h2>{{ signetGroup?.flameChaser }} - {{ signetGroup?.name }}</h2>
      <ul class="list-group list-group-flush">
        <template v-for="signet in signetGroup?.signets" :key="signet.id">
          <li
            v-if="shouldShowSignet(signet)"
            class="list-group-item d-flex justify-content-between align-items-start"
            :class="signet.type.toLowerCase()"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ signet.name }}</div>
              {{ signet.description }}
            </div>
            <span
              class="badge rounded-pill"
              :class="'bg-' + signet.choice?.toLowerCase()"
            >{{ signet.choice }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/_functions";
@import "../node_modules/bootstrap/scss/_variables";
.signet-name {
  width: 25%;
}
.signet-desc {
  width: 65%;
}
.signet-choice {
  width: 10%;
}
.bg-start {
  background-color: $pink;
}
.bg-1st {
  background-color: $teal;
}
.bg-2nd {
  background-color: $purple;
}
.bg-filler {
  background-color: $gray-500;
}
.bg-no {
  background-color: $black;
}
.list-group-item {
  &.exclusive {
    color: $light;
    background-color: $pink-900;
  }
  &.normal {
    color: $light;
    background-color: $cyan-900;
  }
  &.core,
  &.enhanced {
    color: $light;
    background-color: $orange-900;
  }
}
</style>
