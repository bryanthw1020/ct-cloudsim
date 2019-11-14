<template>
  <div>
    <main-banner />
    <v-container fluid pt-5>
      <v-row>
        <v-col>
          <h3 class="subtitle-1">CloudSim Activation</h3>
        </v-col>
      </v-row>
      <v-card>
        <v-card-text>
          <h5 class="body-2 mb-2">Enter your Serial Number</h5>
          <v-text-field
            v-model="activationForm.accountNumber"
            placeholder="2345-6689-7652-0098"
            :error-messages="error.AccountNumber"
            dense
            rounded
            solo
          />
        </v-card-text>
        <v-card-actions class="py-5">
          <v-btn color="primary" :loading="loading" block rounded @click="bind">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainBanner from "~/components/MainBanner";

export default {
  components: {
    MainBanner
  },
  data() {
    return {
      error: [],
      loading: false,
      activationForm: {
        accountNumber: null
      }
    };
  },
  computed: {
    ...mapState(["forceBind", "currentAccount"])
  },
  methods: {
    async bind() {
      try {
        this.loading = true;
        let result = await this.$api.sim.bind(this.activationForm);

        if (result.controlStatus == "Success") {
          this.$store.dispatch("refreshAccounts", this.currentAccount);
          this.showMessage("success", "Successfully bind your account.");
          this.$router.push("/");
          return;
        }

        this.showMessage("error", result.controlMessage);
      } catch (err) {
        let response = err.response;

        if (response.status == 400) {
          this.error = response.data;
        } else {
          this.showMessage(
            "error",
            "Oops! There's some issue binding your account. Please try again."
          );
        }
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
    }
  },
  mounted() {
    let vm = this;
    setTimeout(() => {
      if (vm.forceBind) {
        vm.$store.dispatch("showSnackbar", {
          text: "No account found. Please bind an account first.",
          timeout: 2000,
          color: "warning"
        });
      }
    }, 1000);
  }
};
</script>