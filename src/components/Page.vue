<template>
    <div class="page container">
        <div class="row">
            <div class="col-md-9">
                <div v-if="node.title">{{node.title}}</div>
                <slot></slot>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
  name: "page",
  props: ["node", "themeColor"]
};
</script>