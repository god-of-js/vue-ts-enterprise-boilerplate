<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import ModalContainer from "./ModalContainer.vue";
import ModalCard from "./ModalCard.vue";
import ModalShowUserId from "./ModalShowUserId.vue";
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
        invokeClose();
        // Property 'closeModal' does not exist on type 'Document'
        // this.closeModal();
      }
    });
  }

  closeModal(): void {
    this.$emit("closeModal");
  }
}
</script>

<template>
  <modal-container>
    <modal-card>
      <div :class="$style['u-flex-end']">
        <base-button styleType="c-base-button--transparent" @click="closeModal"
          >CLOSE or PRESS ESC</base-button
        >
      </div>
      <component :is="activeModal" />
    </modal-card>
  </modal-container>
</template>

<style module lang="scss">
.u-flex-end {
  display: flex;
  justify-content: flex-end;
}
</style>
