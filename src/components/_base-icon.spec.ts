import { shallowMount, mount } from "@vue/test-utils";
import BaseIcon from "./_base-icon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

describe("@/components/_base-icon.vue", () => {
  // it("renders font-awesome icon by default", () => {
  //   const wrapper = mount(BaseIcon, {
  //     propsData: {
  //       iconName: "faUser"
  //     }
  //   });
  //   expect(wrapper.findComponent(FontAwesomeIcon).exists()).toBe(true);
  // });
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
