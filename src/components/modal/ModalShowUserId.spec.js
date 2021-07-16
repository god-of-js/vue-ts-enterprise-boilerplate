/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import ModalShowUserId from "./ModalShowUserId.vue";
describe("@/components/ModalShowUserId.vue", () => {
  it("should render currentUser's ID", () => {
    const { element } = shallowMount(ModalShowUserId, {
      computed: {
        currentUser() {
          return {
            user: {
              id: "ndkfjdkj",
            },
          };
        },
      },
    });
    expect(element.innerHTML).toContain(`User Id:ndkfjdkj`);
  });
  it("should render a message when there is no User", () => {
    const { element } = shallowMount(ModalShowUserId, {
      computed: {
        currentUser() {
          return null;
        },
      },
    });
    expect(element.innerHTML).toContain(
      `User Id:No id for this user. try logging in.`
    );
  });
});
