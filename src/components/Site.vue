<template>
  <render :node="node" :themeColor="node.config.themeColor"></render>
</template>
<script>
import Render from "./Render.vue";
//import node from './test.json'
export default {
  name: "page",
  components: {
    Render
  },
  data() {
    var node = require("./test.json");
    return { node };
  }
};
</script>