import { shallowMount } from "@vue/test-utils";
import BaseModal from "./_base-modal.vue";
describe("@/components/_base-modal.vue", () => {
  it("Modal close button should trigger event when clicked.", () => {
    const wrapper = shallowMount(BaseModal, {
      computed: {
        activeModal() {
          return "ModalShowUserId";
        },
      },
    });
    wrapper.find(".js-modal-button").trigger("click");
    expect(wrapper.emitted().closeModal).toBeTruthy();
  });
});
