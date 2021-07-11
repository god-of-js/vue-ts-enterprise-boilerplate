<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({ required: true }) routeName!: string;
}
</script>

<template>
  <span>
    <router-link :to="{ name: routeName }" :class="$style['c-base-link']"
      ><slot
    /></router-link>
  </span>
</template>

<style module lang="scss">
@import "../assets/styles/colors.scss";
.c-base-link {
  color: $white;
}
</style>
