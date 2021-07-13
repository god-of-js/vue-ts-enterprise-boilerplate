<template>
  <div id="app">
    <app-top-navigation v-if="isAuthenticated" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import storeVariables from "@/store/storeVariables.types";
const AppTopNavigation = () => import("./components/AppTopNavigation.vue");
@Component({
  components: {
    AppTopNavigation,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: storeVariables.IS_AUTHENTICATED_GETTER,
    }),
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/colors.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $base-color;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
