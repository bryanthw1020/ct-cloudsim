<template>
  <v-container fill-height fluid>
    <v-row class="text-center" align="center">
      <v-col cols="8" offset="2">
        <p class="subtitle-1">{{ message }}</p>
        <v-progress-linear indeterminate rounded height="6"></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "Authenticating your access...",
      formModel: {
        cardNo: this.$route.query.uuid
      }
    };
  },
  methods: {
    async login() {
      try {
        let { token } = await this.$api.ct.getToken(this.formModel);
        let accounts = await this.$api.sim.getAccountList({ token: token });

        this.$store.commit("setToken", token);
        this.$store.commit("setAccounts", { accounts: accounts.data });
        this.$store.dispatch("showSnackbar", {
          text: "Successfully authenticated. Redirecting you to homepage.",
          timeout: 1000,
          color: "success"
        });
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.$store.dispatch("showSnackbar", {
          text:
            "Oops! There's some issue authenticating your access. Please try again.",
          color: "error"
        });
      }
    }
  },
  mounted() {
    this.login();
  }
};
</script>