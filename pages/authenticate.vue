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
      loading: true,
      message: "Authenticating your access...",
      formModel: {
        cardNo: this.$route.query.uuid
      }
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: this.formModel
        });
        this.$store.dispatch("showSnackbar", {
          text: "Successfully authenticated. Redirecting you to homepage.",
          color: "success"
        });
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        this.$store.dispatch("showSnackbar", {
          text:
            "Oops! There's some issue authenticating your access. Please try again.",
          timeout: 0,
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