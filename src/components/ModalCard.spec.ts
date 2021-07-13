import { shallowMount } from "@vue/test-utils";
import ModalCard from "./ModalCard.vue";
describe("@/components/ModalCard.vue", () => {
  const slotContent = "<spanJust a regular modal </span>";
  const { element } = shallowMount(ModalCard, {
    slots: {
      default: slotContent,
    },
  });
  expect(element.innerHTML).toContain(slotContent);
});
