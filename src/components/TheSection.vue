<template>
<section>
    <div v-if="node.title">{{node.title}}</div>
    <slot></slot>
</section>
</template>
<script>
    export default{
        name:'the-section',
        props:['node','themeColor']
    }
</script>