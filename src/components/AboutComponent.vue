<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <!-- About 3 Section -->
  <section id="about-3" class="about-3 section">

    <div class="container section-title" data-aos="fade-up">
      <h2>Who We Are</h2>
    </div><!-- End Section Title -->

    <div class="container">
      <div class="row gy-4 justify-content-between align-items-center">
        <div class="col-lg-6 order-lg-2 position-relative" data-aos="zoom-out">
          <img src="/img/about.jpg" alt="Image" class="img-fluid rounded-circle">
          <!--              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn">-->
          <!--                <span class="play"><i class="bi bi-play-fill"></i></span>-->
          <!--              </a>-->
        </div>
        <div class="col-lg-5 order-lg-1" data-aos="fade-up" data-aos-delay="100">
          <p class="mb-4">
            <b>Eastern Prime Business Consult Limited</b> is dedicated
            to driving growth, efficiency, and sustainability in the
            agricultural sector through tailored consulting services
            and innovative solutions. We provide strategic support
            to farmers, agribusinesses, and SMEs, empowering
            them to thrive in a competitive and evolving market.
          </p>
          <h3 data-aos="fade-up" data-aos-delay="100">Why Choose Us</h3>
          <p data-aos="fade-up" data-aos-delay="100">
            With our extensive expertise, client-centered
            approach, and deep understanding of the agricultural
            sector, we are your trusted partner in building resilient
            and profitable agribusinesses. <br>
            Let us help you transform challenges into
            opportunities and achieve sustainable growth.
          </p>
          <ul class="list-unstyled list-check">
            <li>Agricultural Management Solutions.</li>
            <li>Climate-Friendly Initiatives.</li>
            <li>Empowering Women and Youth.</li>
            <li>Market Linkages.</li>
            <li>Business Development and Training.</li>
            <li>Access to Finance.</li>
          </ul>

<!--          <p><a class="btn-cta gradient-color" @click="router.push({name: 'contact'})"-->
<!--                style="cursor: pointer; color: black"-->
<!--          >Get in touch</a></p>-->
        </div>
      </div>
    </div>
  </section><!-- /About 3 Section -->


</template>

