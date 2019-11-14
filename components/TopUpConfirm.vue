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
          >{{ currentAccount.price }} CTO</span>
        </p>
      </v-card-text>
      <v-spacer class="py-5" />
      <v-card-actions class="flex-column">
        <v-btn
          class="mb-3"
          color="red"
          :disabled="loading"
          block
          outlined
          rounded
          @click="close"
        >Cancel</v-btn>
        <v-btn
          class="ma-0 mb-2"
          color="primary"
          :loading="loading"
          block
          outlined
          rounded
          @click="submit"
        >Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState(["currentAccount"]),
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
    },
    async submit() {
      try {
        this.loading = true;
        let result = await this.$api.sim.topup({
          accountNumber: this.currentAccount.accountNumber
        });

        if (result.controlStatus == "Success") {
          this.$store.dispatch("refreshAccounts", this.currentAccount);
          this.showMessage("success", "Successfully top up your account.");
          this.$router.push("/");
          return;
        }

        this.showMessage("error", result.controlMessage);
      } catch (err) {
        this.showMessage(
          "error",
          "Oops! There's some issue topping up your account. Please try again."
        );
      } finally {
        this.loading = false;
      }
    },
    showMessage(color, message) {
      this.$store.dispatch("showSnackbar", {
        text: message,
        timeout: 3000,
        color: color
      });
    },
    showSuccess() {
      this.$store.commit("topup/setShowResult", true);
    }
  }
};
</script>