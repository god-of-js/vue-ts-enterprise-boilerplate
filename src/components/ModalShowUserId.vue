<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { CurrentUserInterface } from "@/types/interfaces";
@Component({
  computed: {
    ...mapState(["currentUser"]),
  },
})
export default class ModalShowUserId extends Vue {
  checkCurrentUser(user: CurrentUserInterface): string {
    return user ? user.id : "No id for this user. try logging in.";
  }
}
</script>

<template>
  <div id="user-id">User Id:{{ checkCurrentUser(currentUser) }}</div>
</template>

<style scoped></style>
