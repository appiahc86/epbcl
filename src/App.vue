<script setup>
import {RouterLink, RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

</script>

<template>

  <Header />

  <RouterView />

  <Footer />

  <!-- Scroll Top -->
  <a href="#" id="scroll-top"
     class="scroll-top d-flex align-items-center justify-content-center"
  style="background: #5a9c0e">
    <i class="bi bi-arrow-up-short"></i></a>
  <!-- Preloader -->
  <div id="preloader"></div>

</template>

<style>
.router-link-exact-active {
  color: green !important;
  font-weight: bold !important;
}
</style>
