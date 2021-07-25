---
to: "src/mixins/<%= h.changeCase.pascal(name)  %>.ts"
---
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "<%= h.changeCase.pascal(name) %>",
})
export default class <%= h.changeCase.pascal(name) %> extends Vue {}
