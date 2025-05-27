<script setup>
import { RouterLink } from "vue-router"
import { useRouter } from "vue-router";

const router = useRouter();

import AboutComponent from "@/components/AboutComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";
</script>
<template>
  <main class="main">

    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade" style="background-image: url(/img/page-title-bg.jpg);">
      <div class="container position-relative">
        <h1>Who We Are</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><router-link :to="{name: 'home'}" class="text-white fw-bold">Home</router-link></li>
            <li class="current text-white">About Us</li>
          </ol>
        </nav>
      </div>
    </div> <!-- End Page Title -->

    <!-- About 3 Section -->
  <AboutComponent />

    <!-- Team Section -->
<TeamComponent />
    <!-- /Team Section -->


  </main>
</template>

<style>

</style>
