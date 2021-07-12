<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LOGIN_USER } from "@/queries/queries";
import { User } from "@/@types/interfaces";
import { emailValidator } from "@/helpers/RegexValidators";
@Component({
  name: "Login",
})
export default class extends Vue {
  data: User = {
    email: "",
    password: "",
  };
  loading = false;
  get buttonState(): boolean {
    return !(
      emailValidator.test(this.data.email) && this.data.password.length >= 8
    );
  }
  public async login(): Promise<void> {
    this.loading = true;
    await this.$apollo.mutate({
      mutation: LOGIN_USER,
      variables: {
        user: this.data,
      },
      update: (cache, { data: { insert_todos } }) => {
        console.log(insert_todos);
      },
    });
    this.loading = false;
  }
}
</script>

<template>
  <div>
    <form action="submit" @submit.prevent="login">
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
      <base-button
        :class="$style['u-margin-top']"
        :disabled="buttonState"
        :loading="loading"
        >SIGN IN</base-button
      >
    </form>
    <div :class="$style['u-margin-top']">
      Not a member? <base-link routeName="Register">Sign Up now</base-link>
    </div>
  </div>
</template>

<style module lang="scss">
.u-margin-top {
  margin-top: 10px;
}
</style>
