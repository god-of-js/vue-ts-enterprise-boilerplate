<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<template>
  <div class="authentication">
    <router-view></router-view>
  </div>
</template>

<style lang="sass" module></style>
