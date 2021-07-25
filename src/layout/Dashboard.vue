<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Dashboard",
})
export default class Dashboard extends Vue {}
</script>

<template>
  <div :class="$style['c-dashboard']"></div>
</template>
