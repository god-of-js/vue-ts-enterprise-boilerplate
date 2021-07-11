import { shallowMount } from "@vue/test-utils";
import BaseLink from "./_base-link.vue";
describe("@/components/_base-link.vue", () => {
  it("Renders slot", () => {
    const slotContent = "<span>Register </span>";
    const { element } = shallowMount(BaseLink, {
      propsData: {
        name: "Register",
      },
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
