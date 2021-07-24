---
to: "src/components/<%= h.changeCase.pascal(name)  %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "<%= h.changeCase.pascal(name) %>",
})
export default class <%= h.changeCase.pascal(name) %> extends Vue {}
</script>
<%
}

if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div :class="$style['c-<%= h.changeCase.kebab(name).toLowerCase() %>']"></div>
</template>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module>
  .c-<%= h.changeCase.kebab(name).toLowerCase() %>{}
</style>
<%
}
%>
