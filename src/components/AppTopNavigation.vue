<template>
  <nav>
    <ul>
      <li><base-link routeName="Login">LOGIN</base-link></li>
      <li>||</li>
      <li><base-link routeName="ViewProfile">VIEW PROFILE</base-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppTopNavigation extends Vue {}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  padding: 0px;
  list-style-type: none;
  justify-content: center;
}
</style>
