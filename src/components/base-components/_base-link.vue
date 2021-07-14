<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "BaseLink",
})
export default class BaseLink extends Vue {
  @Prop({ required: true, default: "/" }) routeName!: string;
}
</script>

<template>
  <router-link :to="{ name: routeName }" :class="$style['c-base-link']"
    ><slot
  /></router-link>
</template>

<style module lang="scss">
@import "../../assets/styles/colors.scss";
.c-base-link {
  color: $white;
}
</style>
