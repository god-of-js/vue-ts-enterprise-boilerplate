<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: false }) disabled!: boolean;
}
</script>

<template>
  <button
    v-on="$listeners"
    :class="[$style['c-base-button'], disabled ? $style['u-disabled'] : '']"
  >
    <slot v-if="!loading" />
    <span v-else>Loading.... </span>
  </button>
</template>

<style lang="scss" module>
@import "../assets/styles/colors.scss";
.c-base-button {
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $pink;
  border: transparent;
  cursor: pointer;
  color: $white;
}
.u-disabled {
  opacity: 0.6;
}
</style>
