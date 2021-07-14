import { shallowMount } from "@vue/test-utils";
import BaseLink from "./base-components/_base-link.vue";
describe("@/components/_base-link.vue", () => {
  it("Renders slot", () => {
    const slotContent = "<span>Register </span>";
    const { element } = shallowMount(BaseLink, {
      propsData: {
        routeName: "Login",
      },
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
