<template>
  <v-container fluid>
    <h3 class="subtitle-1">Data Pass</h3>
    <div>
      <v-card
        class="mb-4"
        v-for="(dataPass, key) in dataPasses"
        :key="key"
        @click="confirmTopUp(dataPass)"
      >
        <div class="d-flex align-center justify-space-between">
          <v-avatar class="ma-3" color="primary" size="60">
            <span class="white--text">{{ dataPass.data_volume }}GB</span>
          </v-avatar>
          <div>
            <v-card-text>
              <p class="ma-0">4G High Speed</p>
              <p class="ma-0">3 in 1 SIM card</p>
              <p class="ma-0">Hotspot & Tethering enabled</p>
            </v-card-text>
          </div>
          <div class="text-right">
            <v-card-title>{{ dataPass.price_usd }} USDT</v-card-title>
            <v-card-subtitle>{{ dataPass.price_cto }} CTO</v-card-subtitle>
          </div>
        </div>
      </v-card>
    </div>
    <p class="body-2 red--text ma-0">*Current Price CTO/USDT 0.5213</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dataPasses: [
        {
          data_volume: "1",
          price_usd: "12",
          price_cto: "24.62"
        },
        {
          data_volume: "2",
          price_usd: "19",
          price_cto: "35.79"
        },
        {
          data_volume: "3",
          price_usd: "26",
          price_cto: "70.09"
        }
      ]
    };
  },
  methods: {
    confirmTopUp(dataPass) {
      console.log(dataPass);
    }
  }
};
</script>