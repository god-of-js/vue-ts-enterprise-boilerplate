/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import ModalCard from "./ModalCard.vue";
describe("@/components/ModalCard.vue", () => {
  it("Modal should render slot", () => {
    const slotContent = "<span> Just a regular modal </span>";
    const { element } = shallowMount(ModalCard, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
