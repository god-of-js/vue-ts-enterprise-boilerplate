import { shallowMount } from "@vue/test-utils";
import BaseButton from "./_base-button.vue";

describe("@/components/_base-button.vue", () => {
  it("Renders default slot", () => {
    const slotContent = "<span>Register </span>";
    const { element } = shallowMount(BaseButton, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
  it("Button loads when loading is set to true", () => {
    const loadingElement = "<span>Loading.... </span>";
    const { element } = shallowMount(BaseButton, {
      propsData: {
        loading: true,
      },
    });
    expect(element.innerHTML).toContain(loadingElement);
  });
  it("Check if slot is removed when loading is triggered", () => {
    const slotContent = "<span>Register </span>";
    const { element } = shallowMount(BaseButton, {
      propsData: {
        loading: true,
      },
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).not.toContain(slotContent);
  });
});
