<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import ModalContainer from "../modal/ModalContainer.vue";
import ModalCard from "../modal/ModalCard.vue";
import ModalShowUserId from "../modal/ModalShowUserId.vue";
const MyModalCollection: Array<string> = ["ModalShowUserId"];
@Component({
  name: "BaseModal",
  components: {
    ModalContainer,
    ModalCard,
    ModalShowUserId,
  },
  computed: {
    ...mapState(["activeModal"]),
  },
})
export default class BaseModal extends Vue {
  activeModal!: string;
  mounted(): void {
    const invokeClose = () => {
      this.closeModal();
    };
    // Adding close on escape for keyboard users.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        // Making use of invokeClose here because `this` and IIFE's are not available at this point.
        invokeClose();
        // Property 'closeModal' does not exist on type 'Document'
        // this.closeModal();
      }
    });
  }
  beforeDestroy(): void {
    document.removeEventListener("keydown", () => {
      console.log("component destroyed.");
    });
  }
  getPresentModal(): string {
    return MyModalCollection.includes(this.activeModal)
      ? this.activeModal
      : "ModalShowUserId"; // "ModalShowUserId" is the default modal if the modal does not exist
  }
  closeModal(): void {
    this.$emit("closeModal");
  }
}
</script>

<template>
  <modal-container @click="closeModal">
    <modal-card @click.stop="">
      <div :class="$style['u-flex-end']">
        <base-button
          styleType="c-base-button--transparent"
          @click="closeModal"
          class="js-modal-button"
          >CLOSE or PRESS ESC</base-button
        >
      </div>
      <component :is="getPresentModal()" />
    </modal-card>
  </modal-container>
</template>

<style module lang="scss">
.u-flex-end {
  display: flex;
  justify-content: flex-end;
}
</style>
