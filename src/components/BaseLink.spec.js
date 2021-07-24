/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import BaseLink from "./BaseLink.vue";
describe("@/components/BaseLink.vue", () => {
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
