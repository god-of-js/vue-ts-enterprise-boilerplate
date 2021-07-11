<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<template>
  <div :class="$style.authentication">
    <article :class="$style.authentication__card">
      <router-view></router-view>
    </article>
  </div>
</template>

<style lang="scss" module>
@import "../assets/styles/colors.scss";
.authentication {
  background: $base-color;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  &__card {
    width: 30%;
    margin: auto;
  }
}
</style>
