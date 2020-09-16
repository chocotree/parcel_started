<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from './components/Header/Header.vue';

export default Vue.extend({
  name: "App",

  components: {
    Header,
  },

});
</script>