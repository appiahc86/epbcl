<script setup>
import  { RouterLink } from "vue-router";
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter();

onMounted(() => {
  const links = document.querySelectorAll(".link-page");
  const closeBtn = document.querySelector("#btn-close");

  for (const link of links) {
    link.addEventListener("click", () => {
      closeBtn.click();
    })
  }


})

</script>/
<template>

    <header id="header" class="header d-flex align-items-center position-relative">
      <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-tp w-100">
      <div class="container-fluid">
        <router-link :to="{name: 'home'}" class="navbar-brand logo d-flex align-items-center">
          <img src="/img/logo.png" alt="Agriculture" class="">
        </router-link>
        <span class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="bi bi-list"></span>
        </span>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div class="offcanvas-header">
            <button type="button" id="btn-close" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">

            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link link-page">Home</router-link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul class="dropdown-menu">
                  <li><router-link :to="{name: 'about'}" class="dropdown-item link-page">Who We Are</router-link></li>
                  <li><router-link :to="{name: 'gallery'}" class="dropdown-item link-page">Gallery</router-link></li>
                </ul>
              </li>
               <li class="nav-item">
                 <router-link :to="{name: 'services'}" class="nav-link link-page">Our Services</router-link>
               </li>
               <li class="nav-item">
                 <router-link :to="{name: 'contact'}" class="nav-link link-page">Contact</router-link>
               </li>
            </ul>


          </div>
        </div>
      </div>
    </nav>
<!--    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>-->
            </div>
          </header>

</template>

<style scoped>

.nav-item a:hover {
  background: #ccc;
}
#button-link a
{
  color:#f2f2f2;
}
header {
  padding: 0 !important;
}

@media screen and (max-width: 400px) {
  .logo img {
    max-height: 35px !important;
  }
}
</style>
