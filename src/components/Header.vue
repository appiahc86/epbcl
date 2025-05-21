<script setup>
import  { RouterLink } from "vue-router";
import {useRouter} from "vue-router";

const router = useRouter();
</script>/
<template>
  <header id="header" class="header d-flex align-items-center position-relative">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a  class="logo d-flex align-items-center"
          @click="router.push({name: 'home'})"
      style="cursor: pointer; color: #d8c24f">
        <img src="/img/logo.png" alt="AgriCulture" class="">
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li class="dropdown"><a href="#"><span>About Us</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><router-link :to="{name: 'about'}">Who We Are</router-link></li>
              <li><router-link :to="{name: 'gallery'}">Gallery</router-link></li>
            </ul>
          </li>
          <li><router-link :to="{name: 'services'}" class="">Our Services</router-link></li>
          <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>
</template>
