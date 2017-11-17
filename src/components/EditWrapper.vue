<template>
  <div>
      <textarea :node="node" :themeColor="themeColor" v-model="node.content.detail" ></textarea>
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:'edit-wapper',
  props:['node','themeColor'],
  data(){
      return node;
  }
}
</script>
