<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ModalCard extends Vue {}
</script>

<template>
  <div :class="$style['c-modal-card']">
    <slot />
  </div>
</template>

<style module lang="scss">
@import "@/styles";
.c-modal-card {
  border-radius: 5px;
  background: $brown;
  padding: 20px;
  width: 40%;
}
.u-flex-end {
  display: flex;
  justify-content: flex-end;
}
</style>
