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
        <v-btn class="mb-3" color="red" block outlined rounded @click="cancel">Cancel</v-btn>
        <v-btn class="ma-0 mb-2" color="primary" block outlined rounded @click="submit">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      activateAuto: false
    };
  },
  methods: {
    cancel() {
      this.show = false;
      this.$bus.$emit("revertAutoTopUpToggle");
    },
    async submit() {
        try {
            let result = await this.$api.sim.autoTopup();
        } catch (err) {
            console.log(err);
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