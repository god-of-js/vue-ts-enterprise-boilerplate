---
to: "src/layout/<%= h.changeCase.pascal(name)  %>.spec.js"
---
<%
  const importName = h.changeCase.pascal(name)

%>
/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";
import <%= importName %> from "./<%= importName %>.vue";

describe("@/layout/<%= h.changeCase.pascal(name) %>", () => {
  it("Write a test here", () => {
    const { element } = shallowMount(<%= importName %>, {});
    // Write tests here
  });
});
