<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "@/@types/interfaces";
import { emailValidator } from "@/helpers/RegexValidators";
@Component
export default class extends Vue {
  data: User = {
    email: "",
    password: "",
  };
  get buttonState(): boolean {
    return !(
      emailValidator.test(this.data.email) && this.data.password.length >= 8
    );
  }
}
</script>

<template>
  <div>
    <form action="submit">
      <base-input
        v-model="data.email"
        label="username"
        icon="user"
        placeholder="Username"
        type="email"
      />
      <base-input
        v-model="data.password"
        label="password"
        icon="lock"
        type="password"
        placeholder="Password"
        :class="$style['u-margin-top']"
      />
      <base-button :class="$style['u-margin-top']" :disabled="buttonState"
        >SIGN IN</base-button
      >
    </form>
    <div :class="$style['u-margin-top']">
      Not a member? <base-link routeName="Register">Register</base-link>
    </div>
  </div>
</template>

<style module lang="scss">
.u-margin-top {
  margin-top: 10px;
}
</style>
