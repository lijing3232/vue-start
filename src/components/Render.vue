<template>
  <component :is="node.type" :node="node" :themeColor="themeColor">
      <render v-for="child in node.children" :key="child.id" :node="child" :themeColor="themeColor" />
  </component>
</template>
<script>
import Paragraph from "./Paragraph.vue";
import TheSection from "./TheSection.vue";
import Page from "./Page.vue";
export default {
  name: "render",
  props: ["node", "themeColor"],
  components: {
    Paragraph,
    TheSection,
    Page
  }
}
</script>