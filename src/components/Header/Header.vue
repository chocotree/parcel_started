<template>
  <header>
    <div class="head">

      <ul class="link-list">
        <li class="link-list-item">
          <router-link to="/" exact>home</router-link>
        </li>
        <li class="link-list-item">
          <router-link to="/about" exact>about</router-link>
        </li>
      </ul>

    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>