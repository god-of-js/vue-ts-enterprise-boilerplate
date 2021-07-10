import { shallowMount } from "@vue/test-utils";
import BaseInput from "./_base-input.vue";

describe("@/components/_base-input.vue", () => {
  it("", () => {
    const { element } = shallowMount(BaseInput, {});
    console.log(element);
  });
});
