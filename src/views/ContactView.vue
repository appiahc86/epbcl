<script setup>
import { RouterLink } from "vue-router";
import {ref} from "vue";
import emailjs from '@emailjs/browser';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const myForm = ref();
const email = ref('');
const name = ref('');
const message = ref('');
const subject = ref('');
const sendingMail = ref(false);


const sendMail = async () => {
  try {



    if (!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)){
      return toast.error("Please Enter a valid email address", {
        autoClose: 5000,
      });
    }

    if (name.value.trim().length < 2) {
      return toast.error("Please Enter your name", {
        autoClose: 5000,
      });
    }



    sendingMail.value = true;

    const result = await emailjs.sendForm(
        'service_r0bz8db',

        'epbcl_contact_form',
        myForm.value,
        'uuM6pUHNvPCTHNgZa');

    myForm.value.reset();
    email.value = "";
    name.value = "";
    subject.value = "";
    message.value = "";
    return toast.success("Email Was Sent Successfully", {
      autoClose: 5000,
    });
  }catch (e){
    return toast.error("Error Occurred. Please try again later", {
      autoClose: 5000,
    });
  }finally { sendingMail.value = false; }

}

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

<!-- Google Maps   -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7060778895507!2d-0.5573798251585222!3d6.170096893817231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf2756586adc49%3A0xbc3e476786b5b82f!2sEastern%20Prime%20Business%20Consult%20Limited!5e0!3m2!1sen!2sgh!4v1748325055602!5m2!1sen!2sgh"
                width="100%" height="450" style="border:0;"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div><!-- End Google Maps -->

      <div class="">
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
                  <p>Old estate ssnit traffic light, <b>Koforidua</b> and <b>Kibi</b></p>
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
            <form role="form" class="php-email-form"
                  id="contact-form"
                  ref="myForm"
                  @submit.prevent="sendMail"
            >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" v-model.trim="name"
                         id="form_name" placeholder="Your Name" minlength="3" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" v-model.trim="email"
                         id="form_email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" v-model.trim="subject"
                       name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message"
                          v-model.trim="message" minlength="10"
                          placeholder="message" required></textarea>
              </div>

              <div class="text-center">
                <button type="submit" style="background: #5a9c0e;" :disabled="sendingMail">
                  Send Message
                  <span class="spinner-border spinner-border-sm" v-if="sendingMail"></span>
                </button>
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