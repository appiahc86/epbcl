<script setup>
import { RouterLink } from "vue-router"


</script>

<template>
  <footer id="footer" class="footer dark-background">

    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="" class="logo d-flex align-items-center">
              <img class="sitename" src="/img/footerlogo.png">
            </a>
            <div class="footer-contact pt-3">
              <p> <strong><span class="bi bi-pin-map-fill"></span> </strong> Osabene Opoku Nsiah Junction, Koforidua</p>
              <p class="mt-3">
                <a href="tel:+233201975774" style="color: white;">
                  <strong><span class="bi bi-telephone"></span></strong> <span style="text-decoration: none !important;">+233 20 197 5774</span>
                </a>
              </p>
              <p><strong><span class="bi bi-envelope"></span></strong> <span>
                <a href="mailto:info@epbcl.com" class="text-white">info@epbcl.com</a>
              </span></p>
            </div>
          </div>

          <div class="col-lg-4 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><router-link :to="{name: 'home'}">Home</router-link></li>
              <li><router-link :to="{name: 'about'}">About us</router-link></li>
              <li><router-link :to="{name: 'services'}">Services</router-link></li>
              <li><router-link :to="{name: 'contact'}">Contact</router-link></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a>Climate-Friendly Initiatives</a></li>
              <li><a>Agricultural Management Solutions</a></li>
              <li><a>Empowering Women and Youth</a></li>
              <li><a>Market Linkages</a></li>
              <li><a>Business Development and Training</a></li>
              <li><a>Access to Finance</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="copyright text-center">
      <div class="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div class="d-flex flex-column align-items-center align-items-lg-start">
          <div>
            © Copyright <strong><span>Eastern Prime Business Consult Ltd.</span></strong> All Rights Reserved
          </div>
        </div>

        <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a href="#"><i class="bi bi-twitter-x"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
<!--          <a href="#"><i class="bi bi-instagram"></i></a>-->
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>

  </footer>
</template>

<style scoped>

</style>