<template>
  <div class="sample-component-container">
    <h2>{{ headingText }}</h2>
    <h3>{{ bodyText }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SampleComponent extends Vue {
  @Prop() private headingText: string = "";
  @Prop() private bodyText: string = "";
}
</script>

<style>
.sample-component-container {
  padding: 40px;
  background-color: black;
  color: white;
}
</style>
