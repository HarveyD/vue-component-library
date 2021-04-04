<template>
  <div class="sample-component-container">
    <h2>{{ headingText }}</h2>
    <p>{{ bodyText }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    headingText: String,
    bodyText: String
  }
})
export default class SampleComponent extends Vue {
  headingText = "";
  bodyText = "";
}
</script>

<style scoped>
.sample-component-container {
  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  background-color: black;
  color: white;
}
</style>
