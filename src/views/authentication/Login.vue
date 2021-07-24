<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LOGIN_ACTION } from "@/store/storeVariables.types";
import { User } from "@/types/interfaces";
import ModalMain from "@/components/ModalMain.vue";
@Component({
  name: "Login",
  components: {
    ModalMain,
  },
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
      /\S+@\S+\.\S+/.test(this.data.emailAddress) &&
      this.data.password.length >= 8
    );
  }
  public async login(): Promise<void> {
    this.loading = true;
    try {
      await this.$store.dispatch(LOGIN_ACTION, this.data);
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
        autofocus="true"
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
        type="submit"
        >SIGN IN</base-button
      >
    </form>
    <div :class="$style['u-margin-top']">
      Not a member? <base-link routeName="Register">Sign Up now</base-link>
    </div>
    <!--Base modal is kept here because this is the only place it is used. In a real application scenario, it would be put in a more global file. -->
    <modal-main @closeModal="showModal = false" v-if="showModal" />
  </div>
</template>

<style module lang="scss">
.u-margin-top {
  margin-top: 10px;
}
</style>
