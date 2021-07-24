/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import ModalContainer from "./ModalContainer.vue";

describe("@/components/ModalContainer.vue", () => {
  it("Renders default slot", () => {
    const slotContent = "<div>Default slot</div>";
    const { element } = shallowMount(ModalContainer, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
