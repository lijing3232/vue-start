<template>
    <div>
        <h2 :style="{color:themeColor}">{{node.content.title}}</h2>
        <small v-if="node.config&&node.config.showSubTitle">{{node.content.subTitle}}</small>
        <p>{{node.content.detail}}</p>
        <slot></slot>
    </div>  
</template>
<script>
    export default{
        name:'paragraph',
        props:['node','themeColor']
    }
</script>