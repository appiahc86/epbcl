<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="main">

    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade" style="background-image: url(/img/page-title-bg.jpg);">
      <div class="container position-relative">
        <h1>Contact Us</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><router-link :to="{name: 'home'}" class="text-white fw-bold">Home</router-link></li>
            <li class="current text-white">Contact</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <div class="mb-5">
<!--        <iframe-->
<!--            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.28711330292!2d-1.678498599999974!3d6.6689940000000085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9929c3ff8ff3%3A0x402bc5cef9fefe8d!2sGreenField%20Agricultural%20Services!5e0!3m2!1sen!2sgh!4v1681221153494!5m2!1sen!2sgh"-->
<!--            width="100%" height="450"  style="width: 100%; height: 400px; border: 0"-->
<!--            allowfullscreen loading="lazy"-->
<!--            referrerpolicy="no-referrer-when-downgrade"></iframe>-->

      </div><!-- End Google Maps -->

      <div class="gradient-colo">
      <div class="container" data-aos="fade">

        <div class="row gy-5 gx-lg-5 py-4">

          <div class="col-lg-4">

            <div class="info">
<!--              <h3>Get in touch</h3>-->
<!--              <p>Get in touch with us for agricultural partnership-->
<!--                opportunities, inquiries, and support. We're here to help!</p>-->
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>Osabene Opoku Nsiah Junction, <b>Koforidua</b></p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <a href="mailto:info@epbcl.com">info@epbcl.com</a>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <a href="tel:+233201975774"><p>+233 20 197 5774</p></a>
                </div>
              </div><!-- End Info Item -->

            </div>

          </div>

          <div class="col-lg-8">
            <form role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" placeholder="message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center">
                <button type="submit" style="background: #5a9c0e;">Send Message</button>
              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>
      </div>

      </div>
    </section><!-- /Contact Section -->

  </main>

</template>

<style scoped>

</style>