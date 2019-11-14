<template>
  <v-dialog v-model="show" persistent max-width="320">
    <v-card class="text-center">
      <template v-if="activateAuto">
        <v-card-title>Auto Top Up - Activation</v-card-title>
        <v-card-text
          class="pa-3"
        >The default Data Pass is 1GB (7 days). Once your data drops below 50MB or 1 hour before expiry, an automatic top-up will be triggered.</v-card-text>
      </template>
      <template v-else>
        <v-card-title>Auto Top Up - Deactivate</v-card-title>
        <v-card-text class="pa-3">Are you sure you want to deactivate automatic top-up?</v-card-text>
      </template>
      <v-spacer class="py-5" />
      <v-card-actions class="flex-column">
        <v-btn
          class="mb-3"
          color="red"
          :disabled="loading"
          block
          outlined
          rounded
          @click="cancel"
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
      loading: false,
      show: false,
      activateAuto: false
    };
  },
  computed: {
    ...mapState(["accounts", "currentAccount"])
  },
  methods: {
    cancel() {
      this.show = false;
      this.$bus.$emit("revertAutoTopUpToggle");
    },
    async submit() {
      try {
        this.loading = true;
        let message = this.activateAuto
          ? "Successfully activated auto top up."
          : "Successfully deactivated auto top up.";

        await this.$api.sim.autoTopup({
          accountNumber: this.currentAccount.accountNumber,
          autoTopup: this.activateAuto
        });

        this.show = false;
        this.$store.dispatch("refreshAccounts", this.currentAccount);
        this.$store.dispatch("showSnackbar", {
          text: message,
          timeout: 1000,
          color: "success"
        });
      } catch (err) {
        let message = this.activateAuto
          ? "Oops! There's some issue activating auto top up. Please try again."
          : "Oops! There's some issue deactivating auto top up. Please try again.";

        this.$store.dispatch("showSnackbar", {
          text: message,
          color: "error"
        });
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.$bus.$on("autoTopupConfirm", value => {
      this.show = true;
      this.activateAuto = value;
    });
  }
};
</script>