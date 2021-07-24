/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import ModalMain from "./ModalMain.vue";
describe("@/components/ModalMain.vue", () => {
  it("Modal close button should trigger event when clicked.", () => {
    const wrapper = shallowMount(ModalMain, {
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
