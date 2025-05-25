<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const myCarouselElement = document.querySelector('#carouselDarkVariant')
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

})
</script>


<template>

  <!-- Testimonials Section -->
  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <h2>WHAT OUR CLIENTS SAY</h2>
  </div><!-- End Section Title -->

  <section class="gradient-color">

    <div class="container mb-3 py-3">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12">
          <div class="text-center mb-4 pb-2">
            <i class="bi bi-chat-left-quote display-4 text-white"></i>
          </div>

          <div class="card">
            <div class="card-body px-4 py-5">
              <!-- Carousel wrapper -->
              <div id="carouselDarkVariant"  class="carousel slide carousel-dark" data-bs-ride="carousel">

                <!-- Inner -->
                <div class="carousel-inner pb-5">
                  <!-- Single item -->
                  <div class="carousel-item active">

                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-10 col-xl-8">
                        <div class="row">
                          <div class="col-lg-4 d-flex justify-content-center">
                            <img src="/img/testimonials/cocobenz.jpg"
                                 class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                 height="150" />
                          </div>
                          <div
                              class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                            <h4 class="mb-4"><b>Bender Owusu Antwi Bediako</b> - Director, Coco Benz Ltd</h4>
                            <p class="mb-0 pb-3">
                              I recently used their services where they helped facilitate the Covid 19
                              grant for me and was blown away by
                              the level of professionalism and expertise that this
                              team provided. From start to finish, everything was
                              seamless and I felt like I was in good hands. Not only
                              did they exceed my expectations in terms of quality,
                              but they also went above and beyond to ensure that I
                              was satisfied with the end result. I would highly recommend
                              their services to anyone in need and will definitely be
                              using them again in the future!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div class="carousel-item">

                    <div class="row d-flex justify-content-center">
                      <div class="col-lg-10 col-xl-8">
                        <div class="row">
                          <div class="col-lg-4 d-flex justify-content-center">
                            <img src="/img/testimonials/cocobenz.jpg"
                                 class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                 height="150" />
                          </div>
                          <div
                              class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                            <h4 class="mb-4"><b>Bender Owusu Antwi Bediako</b> - Director, Coco Benz Ltd</h4>
                            <p class="mb-0 pb-3">
                              I recently used their services where they helped facilitate the Covid 19
                              grant for me and was blown away by
                              the level of professionalism and expertise that this
                              team provided. From start to finish, everything was
                              seamless and I felt like I was in good hands. Not only
                              did they exceed my expectations in terms of quality,
                              but they also went above and beyond to ensure that I
                              was satisfied with the end result. I would highly recommend
                              their services to anyone in need and will definitely be
                              using them again in the future!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>
                <!-- Inner -->

                <!-- Controls -->

<!--                <a class="carousel-control-prev" href="#carouselDarkVariant" role="button" data-bs-slide="prev">-->
<!--                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--                </a>-->

<!--                <a class="carousel-control-next" href="#carouselDarkVariant" role="button" data-bs-slide="next">-->
<!--                  <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--                </a>-->


              </div>
              <!-- Carousel wrapper -->
            </div>
          </div>

          <div class="text-center mt-2 pt-2">
            <i class="bi bi-chat-right-quote display-4 text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- /Testimonials Section -->


</template>


<style scoped>
.carousel-indicators {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
</style>
