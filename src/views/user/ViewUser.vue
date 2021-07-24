<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(["currentUser"]),
  },
})
export default class ViewUser extends Vue {}
</script>

<template>
  <pre>
    {{ currentUser }} <!-- Leaving the raw value to assert that it is the same format requested.-->
  </pre>
</template>

<style scoped lang="scss">
@import "@/styles";
pre {
  height: 100vh;
  color: $white;
  text-align: left;
}
</style>
