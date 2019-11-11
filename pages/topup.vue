<template>
  <div>
    <v-container fluid>
      <h3 class="subtitle-1 font-weight-bold">Europe SIMs</h3>
      <p class="caption mb-0">Countries Covered:</p>
      <p class="caption mb-0">
        United Kingdom, Ireland, Portugal, Spain, France, Germany,
        Netherlands, Belgium, Luxembourg, Denmark, Sweden,
        Finland, Estonia, Latvia, Lithuania, Poland, Czech REP, Italy,
        Austria, Slovenia, Croatia, Hungary, Malta, Cypress, Greece,
        Bulgaria, Romania, Slovakia, Switzerland, Turkey.
      </p>
    </v-container>
    <data-pass-list />
  </div>
</template>

<script>
import DataPassList from "~/components/DataPassList";

export default {
  auth: false,
  components: {
    DataPassList
  }
};
</script>