/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import BaseInput from "./_base-input.vue";

describe("@/components/_base-input.vue", () => {
  it("works with v-model", () => {
    const wrapper = mount(BaseInput, {
      propsData: { value: "aaa", label: "input" },
    });

    const inputWrapper = wrapper.find("input");
    let inputEl = inputWrapper.element;

    // Has the correct starting value
    expect(inputEl.value).toEqual("aaa");

    // Emits an update event with the correct value when edited
    inputEl.value = "bbb";
    inputWrapper.trigger("input");
    expect(wrapper.emitted().update).toEqual([["bbb"]]);
  });
});
