<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TheTopNavigation extends Vue {}
</script>

<template>
  <nav>
    <ul :class="$style['u-list']">
      <li><base-link routeName="Login">LOGIN</base-link></li>
      <li>||</li>
      <li><base-link routeName="ViewProfile">VIEW PROFILE</base-link></li>
    </ul>
  </nav>
</template>

<style module lang="scss">
.u-list {
  display: flex;
  padding: 0px;
  list-style-type: none;
  justify-content: center;
}
</style>
