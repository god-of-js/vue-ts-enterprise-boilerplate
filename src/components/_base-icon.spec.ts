import { shallowMount } from "@vue/test-utils";
import BaseIcon from "./_base-icon.vue";

describe("@/components/_base-icon.vue", () => {
  it("renders custom icon when type not font-awesome", () => {
    const wrapper = shallowMount(BaseIcon, {
      propsData: {
        iconSource: "mdi",
        iconName: "mdi-user",
      },
    });
    const i = wrapper.find("i");
    expect(i.classes()).toContain("mdi-user");
  });
});
