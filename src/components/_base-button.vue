<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop({ default: false }) loading!: boolean;
}
</script>

<template>
  <button v-on="$listeners">
    <slot v-if="!loading" />
    <span v-else>Loading.... </span>
  </button>
</template>

<style lang="scss" module></style>
