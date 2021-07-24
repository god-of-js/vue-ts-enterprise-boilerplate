<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseButton",
})
export default class BaseButton extends Vue {
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({
    default: "c-base-button",
    validator: (value) =>
      ["c-base-button", "c-base-button--transparent"].includes(value),
  })
  styleType!: string;
}
</script>

<template>
  <button
    v-on="$listeners"
    :class="[$style[styleType], disabled ? $style['u-disabled'] : '']"
    :disabled="disabled"
  >
    <slot v-if="!loading" />
    <span v-else>Loading.... </span>
  </button>
</template>

<style lang="scss" module>
@import "@/styles";
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
.c-base-button--transparent {
  background: transparent;
  border: transparent;
  color: $white;
  cursor: pointer;
}
.u-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
