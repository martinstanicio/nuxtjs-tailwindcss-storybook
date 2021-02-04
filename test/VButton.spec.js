import { mount } from "@vue/test-utils";
import VButton from "~/components/VButton.vue";

describe("VButton", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(VButton);
    expect(wrapper.vm).toBeTruthy();
  });
});
