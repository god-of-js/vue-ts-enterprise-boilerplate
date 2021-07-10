import { shallowMount } from "@vue/test-utils";
import BaseInput from "./_base-input.vue";

describe("@/components/_base-button.vue", () => {
  it("Renders default slot", () => {
    const { element } = shallowMount(BaseInput, {});
  });
});
