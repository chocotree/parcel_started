<template>
    <div class="content-inner">
        <p>hello Home</p>
        <p>sweet cake</p>
        <img class="cake" src="/images/cake.jpg" alt="cake">
        <p>sweet cake2</p>
        <img class="cake" src="/images/food/cake2.jpg" alt="cake">
        <Hi></Hi>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hi from 'aliasComps/Hi.vue';

export default Vue.extend({
    name: 'Home',

    components: {
        Hi,
    },

});
</script>

<style lang="scss" scoped> 
    .cake {
        display: block;
        width: 100%;
        max-width: 500px;
        margin: auto;
    }
</style>