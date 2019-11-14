<template>
  <v-container fluid>
    <h3 class="subtitle-1">Data Pass</h3>
    <div>
      <v-card
        class="datapass mb-4"
        v-for="(dataPass, key) in dataPasses"
        :key="key"
        @click="confirmTopUp(dataPass)"
      >
        <div class="d-flex align-center justify-space-between">
          <v-avatar class="datapass-volume ma-2" color="primary" size="60">
            <span class="white--text">{{ dataPass.data_volume }}GB</span>
          </v-avatar>
          <v-card-text class="datapass-detail caption pa-2">
            <p class="ma-0">4G High Speed</p>
            <p class="ma-0">3 in 1 SIM card</p>
            <p class="ma-0">Hotspot & Tethering enabled</p>
          </v-card-text>
          <v-card-text class="datapass-pricing pa-2 grey--text text--darken-1 text-right">
            <p class="title ma-0">{{ currentAccount.price }} CTO</p>
          </v-card-text>
        </div>
      </v-card>
    </div>
    <top-up-confirm />
    <top-up-result />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import TopUpConfirm from "@/components/TopUpConfirm";
import TopUpResult from "@/components/TopUpResult";

export default {
  components: {
    TopUpConfirm,
    TopUpResult
  },
  computed: {
    ...mapState(["currentAccount"]),
    dataPasses() {
      return [
        {
          data_volume: "1"
        }
      ];
    }
  },
  methods: {
    confirmTopUp(dataPass) {
      this.$store.commit("topup/setShowConfirm", true);
      this.$store.commit("topup/setSelectedDataPass", dataPass);
    }
  }
};
</script>