<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ModalContainer extends Vue {}
</script>

<template>
  <div :class="$style['c-modal-container']">
    <slot />
  </div>
</template>

<style module lang="scss">
@import "@/styles";
.c-modal-container {
  background: $modalbg;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
