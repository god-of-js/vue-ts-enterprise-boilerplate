<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(["currentUser"]),
  },
})
export default class extends Vue {}
</script>

<template>
  <div>
    User Id:
    {{
      currentUser ? currentUser.user.id : "No id for this user. try logging in."
    }}
  </div>
</template>

<style scoped></style>
