<template>
  <v-app id="cloudsim">
    <v-content>
      <nuxt />
    </v-content>
    <v-snackbar :timeout="0" bottom :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn dark @click="$store.dispatch('closeSnackbar')" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["snackbar"])
  }
};
</script>