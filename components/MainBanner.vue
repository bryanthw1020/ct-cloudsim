<template>
  <v-carousel height="150" :hide-delimiters="true" :show-arrows="false">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: ["/img/banner@3x.png"]
    };
  }
};
</script>