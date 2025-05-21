<script setup>
import { RouterLink } from "vue-router";;
import ServicesComponent from "@/components/ServicesComponent.vue";
</script>

<template>
  <main class="main">

    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade" style="background-image: url(/img/page-title-bg.jpg);">
      <div class="container position-relative">
        <h1>Our Services</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><router-link :to="{name: 'home'}" class="text-white fw-bold">Home</router-link></li>
            <li class="current text-white">Services</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Services Section -->
<ServicesComponent />

    <div class="banner dark-background" data-aos="fade" style="background-image: url(/img/services/IMG_3640.jpg);">
    </div>

    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h3 class="fw-bold animate__animated animate__fadeInUp animate__slow">Agribusiness Investment Made Simple</h3>
          <p class="animate__animated animate__fadeInUp animate__slow">At <b>EPBCL</b>, we’re transforming the way people invest in agriculture. Our Farming & Agribusiness
            Investment Program allows you to grow your wealth while we do the farming for you.</p>
          <h3 class="fw-bold animate__animated animate__fadeInUp animate__slow">How It Works</h3>
          <p class="animate__animated animate__fadeInUp animate__slow">
            We provide a seamless, hands-free opportunity for individuals and organizations to invest in
            productive farmland and agricultural projects. You provide the capital—we handle everything
            else.
          </p>
          <p class="animate__animated animate__fadeInUp animate__slow">
            From land acquisition and crop planning to planting, irrigation, harvesting, and market
            distribution—our expert team manages every stage of the farming process with precision and
            care. We use sustainable practices, smart technologies, and market-driven strategies to ensure
            strong yields and maximum returns.
          </p>
        </div>
      </div><!--   End of row   -->
    </div>


    <div class="container-fluid container-md  mt-5 p-0 p-lg-4">
      <div class="row flex-md-row-reverse g-0" style="background:#ecf0f1;">
        <div class="col-md-6"><img src="/img/services/s1.jpg" alt="" class="img-fluid w-100"></div>
        <div class="col-md-6 pt-5 px-3">
          <h3 class="fw-bold animate__animated animate__fadeInUp animate__slow">Why Invest in EPBCL Farms?</h3>
          <ul class="mt-2 mt-lg-5 fs-6">
            <li class="animate__animated animate__fadeInUp animate__slow">Passive Income: Earn regular returns without lifting a hoe.</li>
            <li class="animate__animated animate__fadeInUp animate__slow">Transparency: Receive detailed performance reports and farm updates.</li>
            <li class="animate__animated animate__fadeInUp animate__slow">Expert Management: Our experienced agronomists and farm managers oversee every detail.</li>
            <li class="animate__animated animate__fadeInUp animate__slow">Impactful Investment: Support food security, job creation, and rural development.</li>
          </ul>
        </div>
      </div>
      <div class="row g-0" style="background:#ecf0f1;">
        <div class="col-md-6">
        <img src="/img/services/s2.jpg" alt="" class="img-fluid w-100 h-100">
        </div>
        <div class="col-md-6 pt-5 px-3">
          <h3 class="fw-bold animate__animated animate__fadeInUp animate__slow">You Invest. We Farm. You Profit.</h3>
          <p class="mt-2 mt-lg-5 fs-6 text-center animate__animated animate__fadeInUp animate__slow">
            Whether you’re a seasoned investor looking to diversify your portfolio or someone passionate
            about sustainable agriculture, EPBCL offers a reliable, low-risk entry into agribusiness.
          </p>
          <p class="animate__animated animate__fadeInUp animate__slow fw-bold">
            Join us today and watch your investment grow—literally.
          </p>
        </div>
      </div>
    </div>

<!--    Youtube Videos -->
    <div class="container-fluid mb-4">
      <div class="row">
        <div class="col-md-6">
          <iframe width="100%" height="315"
                  src="https://youtube.com/embed/1SxPSYZMtRY?rel=0"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>
        </div>
        <div class="col-md-6">
          <iframe width="100%" height="315"
                  src="https://www.youtube.com/embed/uTnlvA-YtkM?rel=0"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>

  </main>

</template>

<style scoped>
.banner {
  color: var(--default-color);
  background-color: var(--background-color);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 0;
  text-align: center;
  position: relative;
}

.banner:before {
  content: "";
  background-color: color-mix(in srgb, var(--background-color), transparent 100%);
  position: absolute;
  inset: 0;
}
</style>
