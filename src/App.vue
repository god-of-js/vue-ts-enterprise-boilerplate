<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { IS_AUTHENTICATED_GETTER } from "@/store/storeVariables.types";
const TheTopNavigation = () => import("./components/TheTopNavigation.vue");
@Component({
  components: {
    TheTopNavigation,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: IS_AUTHENTICATED_GETTER,
    }),
  },
})
export default class App extends Vue {}
</script>

<template>
  <div id="app">
    <the-top-navigation v-if="isAuthenticated" />
    <!-- Adding a key to all routes it best practice. it also helps incase there is a route 
    with dynamic parameters, it helps the route re-render when the fullPath changes.-->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
@import "./styles";
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
