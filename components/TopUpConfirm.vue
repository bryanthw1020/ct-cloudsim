<template>
  <v-dialog v-model="show" persistent max-width="320">
    <v-card class="text-center" v-if="selectedDataPass">
      <v-spacer class="py-5" />
      <v-card-text class="pa-3">
        <p class="body-1 mb-0">{{ selectedDataPass.data_volume}} GB Data Pass</p>
        <p class="body-1 mb-0">
          Confirm Payment
          <span
            class="title black--text font-weight-bold"
          >{{ selectedDataPass.price_cto }} CTO</span>
        </p>
        <p class="caption black--text font-weight-bold mb-0">Current Price CTO/USDT 0.5213</p>
      </v-card-text>
      <v-spacer class="py-5" />
      <v-card-actions class="flex-column">
        <v-btn class="mb-3" color="red" block outlined rounded @click="close">Cancel</v-btn>
        <v-btn class="ma-0 mb-2" color="primary" block outlined rounded @click="showSuccess">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.getters["topup/getShowConfirm"];
    },
    selectedDataPass() {
      return this.$store.getters["topup/getSelectedDataPass"];
    }
  },
  methods: {
    close() {
      this.$store.commit("topup/setShowConfirm", false);
      this.$store.commit("topup/setShowResult", false);
    },
    showSuccess() {
      this.$store.commit("topup/setShowResult", true);
    }
  }
};
</script>