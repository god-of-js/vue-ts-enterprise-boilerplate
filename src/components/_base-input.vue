<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseInput",
})
export default class extends Vue {
  @Prop({ required: true }) label!: string;
  @Prop({ default: "text" }) type!: string;
  @Prop({}) icon!: string;
}
</script>

<template>
  <fieldset :class="$style.BaseInput__container">
    <label for="input">{{ label }}</label>
    <div>
      <div><i></i></div>
      <input type="type" />
    </div>
  </fieldset>
</template>

<style lang="scss" module>
.BaseInput__container {
  border: 0;
}
</style>
