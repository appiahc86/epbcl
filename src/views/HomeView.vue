<script setup>
import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import ServicesComponent from "@/components/ServicesComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";

const router = useRouter();

const count1 = ref(2);
const count2 = ref(1);


onMounted(() => {
  const myCarouselElement = document.querySelector('#hero-carousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 6000,
    wrap: true,
    pause: false
  })
  carousel.cycle();

  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });





// Counter

  const counter1 = document.querySelector('#counter1');
  const counter2 = document.querySelector('#counter2');

  // For Counter 1
  window.addEventListener('scroll', () => {
    const containerRect = counter1.getBoundingClientRect();

    if (containerRect.top < window.innerHeight) {

      const intervalId = setInterval(() => {
        if (count1.value < 3000) {
          count1.value += 2;
        } else {
          clearInterval(intervalId);
        }
      }, 33);

    }
  });
//   For counter 2
  window.addEventListener('scroll', () => {
    const containerRect = counter2.getBoundingClientRect();

    if (containerRect.top < window.innerHeight) {

      const intervalId = setInterval(() => {
        if (count2.value < 500) {
          count2.value += 1;
        } else {
          clearInterval(intervalId);
        }
      }, 50);

    }
  });


})

</script>

<template>
    <main class="main">

      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">

        <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel"  data-bs-interval="6000">


          <div class="carousel-item active">
            <img src="/img/c1.jpg" alt="">
            <div class="carousel-container ps-md-5">
              <h2 class="animate__animated animate__fadeInLeft animate__slow display-1">
                Innovating Solutions for a Sustainable Future.
              </h2>
<!--              <p class="animate__animated animate__fadeInUp">-->
<!--                We believe in the power of collaboration, working closely with-->
<!--                farmers and businesses to create mutually beneficial, thriving partnerships.-->
<!--              </p>-->
              <p><button class="btn btn-lg gradient-color display-3 animate__animated animate__fadeInLeft fw-bold"
                         @click="router.push({name: 'contact'})" style="cursor: pointer; color: black"
              >Get In Touch</button>
              </p>
            </div>
          </div><!-- End Carousel Item -->

          <div class="carousel-item">
            <img src="/img/c2.jpg" alt="">
            <div class="carousel-container ps-md-5">
              <h2 class="animate__animated animate__fadeInUp animate__slow display-1"
              >Transforming Agriculture, One Strategy at a Time.</h2>
            </div>
          </div><!-- End Carousel Item -->

          <div class="carousel-item">
            <img src="/img/c3.jpg" alt="">
            <div class="carousel-container ps-md-5">
              <h2 class="animate__animated animate__rotateInUpLeft animate__slow display-1"
              >Driving Growth, Efficiency, and Sustainability in Modern Agriculture.</h2>
            </div>
          </div><!-- End Carousel Item -->

          <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

<!--          <ol class="carousel-indicators"></ol>-->


        </div>


      </section><!-- /Hero Section -->


<!--      Who we are-->
      <section>
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6 d-flex  mb-2 justify-content-center align-items-center">
              <div class="">
              <h2 data-aos="fade-up" data-aos-delay="100">Who We Are</h2>
              <p data-aos="fade-up" data-aos-delay="100">
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
              </div>
            </div>
            <div class="col-lg-6 spacing-md mb-2">
              <img src="/img/home/wwa.jpg" alt="Who we are" class="img-fluid" data-aos="fade-up" data-aos-delay="100">
            </div>

          </div>
        </div>
      </section>


      <ServicesComponent />

<!--      Counter-->
<div class="pb-3 mb-3" style="background: rgba(204,204,204,0.14)">
  <div class="container mb-5">
    <div class="features-counter-area">
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="features-counter mt-30 text-center text-sm-left">
            <img src="/img/icons/crowd-35.png" alt="">
            <span class=""> Small Holder Farmers</span>
            <h3 class="fw-bold counter" id="counter1">{{ count1 ? count1.toLocaleString() : 0  }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="features-counter item-2 mt-30 text-center text-sm-left">
            <img src="/img/icons/shop-35.png" alt="">
            <span> MSMEs</span>
            <h3 class="fw-bold counter" id="counter2">{{ count2 ? count2.toLocaleString() : 0  }}</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="features-counter item-3 mt-30 text-center text-sm-left">
            <img src="/img/icons/flow-chart-35.png" alt="">
            <span> Value Chain</span>
            <h3 class="fw-bold counter">5</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


      <!-- Testimonials Section -->
<TestimonialComponent />



    </main>

</template>


<style scoped>
.features-counter-area {
  padding-top: 5em;
}
.text-sm-left {
  //text-align: left !important;
}
.features-counter {
  //position: relative;
  //padding-left: 54px;
}
.mt-30 {
margin-top: 30px;
}
.icon {
  font-size: 1.7em;
}

</style>
