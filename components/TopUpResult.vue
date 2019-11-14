<template>
  <v-dialog v-model="show" persistent max-width="320">
    <v-card class="text-center">
      <v-spacer class="py-5" />
      <v-card-text class="pa-3">
        <p class="body-1 black--text">Payment is Successful</p>
        <v-img class="mx-auto" src="/img/success@3x.png" max-width="150" />
      </v-card-text>
      <v-spacer class="py-5" />
      <v-card-actions class="flex-column">
        <v-btn class="ma-0 mb-2" color="primary" block outlined rounded @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.getters["topup/getShowResult"];
    }
  },
  methods: {
    close() {
      this.$store.commit("topup/setShowConfirm", false);
      this.$store.commit("topup/setShowResult", false);
    }
  }
};
</script>