<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "DefaultLayout",
})
export default class DefaultLayout extends Vue {}
</script>

<template>
  <div :class="$style['c-default-layout']"></div>
</template>

<style lang="scss" module>
.c-default-layout {
}
</style>
