<template>
  <div>
    <main-banner />
    <v-container fluid>
      <h1 class="title">Europe SIMs</h1>
      <v-row>
        <v-col>
          <h3 class="subtitle-1">Auto Top Up</h3>
        </v-col>
        <v-col cols="auto" align-self="end">
          <v-switch class="mt-0" color="primary" v-model="autoTopUp" dense inset hide-details></v-switch>
        </v-col>
      </v-row>
      <v-card class="simcard">
        <v-card-text>
          <div class="simcard--serial">
            <h5 class="caption">Serial Number</h5>
            <p class="subtitle-1 mb-0 text--primary">2345-6689-7652-0098</p>
          </div>
          <div class="simcard--balance">
            <h4 class="title mb-3">Data Balance</h4>
            <v-row align="end" no-gutters>
              <v-col>
                <p class="display-1 font-weight-bold text--primary ma-0">0.95 GB</p>
              </v-col>
              <v-col cols="auto">
                <p class="body-2 ma-0">of 1.00 GB</p>
              </v-col>
            </v-row>
            <v-progress-linear
              class="my-2"
              color="primary reversed"
              background-color="grey lighten-4"
              height="18"
              value="90"
              rounded
            ></v-progress-linear>
            <p class="body-2 font-weight-medium">Valid till 20 Nov 2019 (7 Days)</p>
          </div>
        </v-card-text>
        <v-card-actions class="py-5">
          <v-btn :to="{name: 'topup'}" color="primary" block rounded>Top Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <v-container fluid pt-5>
      <v-row>
        <v-col>
          <h3 class="subtitle-1">Top Up History</h3>
        </v-col>
      </v-row>
      <v-card>
        <v-list color="grey lighten-3" two-line>
          <v-list-item>
            <v-list-item-content>
              <v-row no-gutters>
                <v-col class="pr-3" cols="auto">
                  <p class="body-2 ma-0 text-right">25 Sept</p>
                  <p class="caption-2 ma-0 text-right">08:47AM</p>
                </v-col>
                <v-col>
                  <v-list-item-title class="font-weight-bold">1GB | 21.32 CTO</v-list-item-title>
                  <p class="caption-2 ma-0">7 days</p>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mx-4 my-2" />
          <v-list-item>
            <v-list-item-content>
              <v-row no-gutters>
                <v-col class="pr-3" cols="auto">
                  <p class="body-2 ma-0 text-right">25 Sept</p>
                  <p class="caption-2 ma-0 text-right">08:47AM</p>
                </v-col>
                <v-col>
                  <v-list-item-title class="font-weight-bold">1GB | 21.32 CTO</v-list-item-title>
                  <p class="caption-2 ma-0">7 days</p>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mx-4 my-2" />
          <v-list-item>
            <v-list-item-content>
              <v-row no-gutters>
                <v-col class="pr-3" cols="auto">
                  <p class="body-2 ma-0 text-right">25 Sept</p>
                  <p class="caption-2 ma-0 text-right">08:47AM</p>
                </v-col>
                <v-col>
                  <v-list-item-title class="font-weight-bold">1GB | 21.32 CTO</v-list-item-title>
                  <p class="caption-2 ma-0">7 days</p>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import MainBanner from "~/components/MainBanner";

export default {
  auth: false,
  components: {
    MainBanner
  },
  data() {
    return {
      autoTopUp: false
    };
  }
};
</script>