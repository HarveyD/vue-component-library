import { shallowMount } from "@vue/test-utils";
import SampleComponent from "./SampleComponent.vue";

describe("SampleComponent", () => {
  it("should render text correctly", () => {
    const header = "header text";
    const body = "body text";
    const wrapper = shallowMount(SampleComponent, {
      props: { headingText: header, bodyText: body }
    });

    const headerText = wrapper.find("h2");
    const bodyText = wrapper.find("p");
    expect(headerText.text()).toMatch(header);
    expect(bodyText.text()).toMatch(body);
  });
});
