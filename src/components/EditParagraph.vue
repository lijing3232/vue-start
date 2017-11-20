<template>
  <edit-wrapper>
      <paragraph :node="node" :themeColor="themeColor" />
  </edit-wrapper>
</template>

<script>
import EditWrapper from './EditWrapper.vue'
import Paragraph from './Paragraph.vue'
import {mapMutations} from 'vuex'

export default {
    name:'edit-paragraph',
    props:['node','themeColor'],
    methods:{...mapMutations(['updateModule'])}
}
</script>
