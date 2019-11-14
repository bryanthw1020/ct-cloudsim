<template>
  <div>
    <main-banner />
    <v-container fluid>
      <v-row>
        <v-col>
          <h1 class="title">{{ currentAccount.description }}</h1>
        </v-col>
        <v-col cols="auto">
          <v-menu bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item :to="{name: 'activation'}">
                <v-list-item-content>
                  <v-list-item-title>Bind Account</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>add</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item
                two-line
                v-for="(account, key) in accounts"
                :key="key"
                @click="switchAccount(account)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ account.description }}</v-list-item-title>
                  <v-list-item-subtitle>{{ account.accountNumber }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon v-if="account.accountNumber == currentAccount.accountNumber">
                  <v-icon>check</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h3 class="subtitle-1">Auto Top Up</h3>
        </v-col>
        <v-col cols="auto" align-self="end">
          <v-switch
            class="mt-0"
            color="primary"
            v-model="autoTopUp"
            dense
            inset
            hide-details
            @change="$bus.$emit('autoTopupConfirm', $event)"
          ></v-switch>
        </v-col>
      </v-row>
      <v-card class="simcard">
        <v-card-text>
          <div class="simcard--serial">
            <h5 class="caption">Serial Number</h5>
            <p class="subtitle-1 mb-0 text--primary">{{ currentAccount.accountNumber }}</p>
          </div>
          <div class="simcard--balance">
            <h4 class="title mb-3">Data Balance</h4>
            <v-row align="end" no-gutters>
              <v-col>
                <p
                  class="display-1 font-weight-bold text--primary ma-0"
                >{{ currentAccount.balance | mbToGb}}</p>
              </v-col>
            </v-row>
            <p class="body-2 font-weight-medium">
              Valid till
              <template v-if="currentAccount.expiryDate">
                <b>{{ currentAccount.expiryDate | dateParse('YYYY-MM-DD HH:mm:ss') | dateFormat('DD MMM YYYY hh:mm A') }}</b>
              </template>
              <template v-else>
                <b>-</b>
              </template>
            </p>
          </div>
        </v-card-text>
        <v-card-actions class="py-5">
          <v-btn :to="{name: 'topup'}" color="primary" block rounded>Top Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <!-- <v-container fluid pt-5>
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
    </v-container>-->
    <auto-top-up-confirm />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainBanner from "~/components/MainBanner";
import AutoTopUpConfirm from "~/components/AutoTopUpConfirm";

export default {
  middleware: ["hasBindAccount"],
  components: {
    MainBanner,
    AutoTopUpConfirm
  },
  data() {
    return {
      autoTopUp: false
    };
  },
  computed: {
    ...mapState(["accounts", "currentAccount"])
  },
  methods: {
    showAutoTopUpConfirm(value) {
      this.$bus.$emit("autoTopupConfirm", value);
    },
    switchAccount(account) {
      this.autoTopUp = account.autoTopup;
      this.$store.commit("setCurrentAccount", account);
    }
  },
  created() {
    this.autoTopUp = this.currentAccount.autoTopup;
    this.$bus.$on("revertAutoTopUpToggle", () => {
      this.autoTopUp = !this.autoTopUp;
    });
  }
};
</script>