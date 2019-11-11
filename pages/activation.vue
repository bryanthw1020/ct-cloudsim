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
            v-model="activationForm.serial_number"
            placeholder="2345-6689-7652-0098"
            dense
            rounded
            solo
          />
        </v-card-text>
        <v-card-actions class="py-5">
          <v-btn color="primary" :loading="loading" block rounded>Confirm</v-btn>
        </v-card-actions>
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
      error: [],
      loading: false,
      activationForm: {
        serial_number: null
      }
    };
  }
};
</script>