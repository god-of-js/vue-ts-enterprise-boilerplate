<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<template>
  <div :class="$style.login">
    <form action="submit" :class="$style.login__form">
      <base-input />
      <base-input />
      <base-button>SIGN IN</base-button>
    </form>
  </div>
</template>

<style module lang="scss">
.login {
  &__form {
  }
}
</style>
