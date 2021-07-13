<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { USER_LOGIN_MUTATION } from "@/queries/queries";
import storeVariables from "@/store/storeVariables.types";
import { User } from "@/@types/interfaces";
import { emailValidator } from "@/helpers/RegexValidators";
@Component({
  name: "Login",
})
export default class extends Vue {
  data: User = {
    emailAddress: "",
    password: "",
  };
  loading = false;
  showModal = false;
  get buttonState(): boolean {
    return !(
      emailValidator.test(this.data.emailAddress) &&
      this.data.password.length >= 8
    );
  }
  public async login(): Promise<void> {
    this.loading = true;
    try {
      const { data } = await this.$apollo.mutate({
        mutation: USER_LOGIN_MUTATION,
        variables: {
          emailAddress: this.data.emailAddress,
          password: this.data.password,
        },
      });
      console.log(data);
      this.$store.dispatch(storeVariables.LOGIN_ACTION, data.loginUser);
      this.showModal = true;
      this.loading = false;
    } catch (err) {
      this.loading = false;
      alert(err);
    }
  }
}
</script>

<template>
  <div>
    <form action="submit" @submit.prevent="login">
      <base-input
        v-model="data.emailAddress"
        label="username"
        icon="user"
        placeholder="Username"
        type="email"
        identifier="email"
      />
      <base-input
        v-model="data.password"
        label="password"
        icon="lock"
        type="password"
        placeholder="Password"
        identifier="password"
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
    <!--Base modal is kept here because this is the only place it is used. In a real application scenario, it would be put in a more global file. -->
    <base-modal @closeModal="showModal = false" v-if="showModal" />
  </div>
</template>

<style module lang="scss">
.u-margin-top {
  margin-top: 10px;
}
</style>
