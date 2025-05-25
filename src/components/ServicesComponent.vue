<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>
  <!-- Services Section -->
  <section id="services" class="services section">

    <!-- Section Title -->
    <div class="container-fluid container-xl section-title" data-aos="fade-up">
      <h2 class="animate__animated animate__fadeInUp">OUR SERVICES</h2>
    </div><!-- End Section Title -->


    <div class="container-fluid">
    <div class="row justify-content-center no-gutters align-items-stretch animate__animated animate__fadeInUp animate__slow">

      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2 h-100" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-2 p-xxl-4 d-flex flex-column services-card-body">
            <div class="display-6 text-center">
              <img src="/img/icons/finance.png" alt="" class="img-fluid" height="60" width="60">
            </div>
            <h5 class="mb-4 fw-bold custom-green text-center">Access to Finance</h5>

            <p>
              <span class="text-muted">Fueling Business Growth Through Strategic Financial Support
              </span><br><br>

              At Eastern Prime, we recognize that access to finance is a cornerstone
              of sustainable growth—whether you’re in agriculture,...
            </p>

            <router-link :to="{name: 'access-to-finance'}" class="text-success">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>

          </div>
        </div>
      </div>

      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2 h-100" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-2 p-xxl-4 d-flex flex-column services-card-body">
            <!-- Icon -->
            <div class="display-6 text-center">
              <img src="/img/icons/agric.png" alt="" class="img-fluid" height="60" width="60">
            </div>
            <h5 class="mb-4 fw-bold custom-green text-center">Agricultural Management Solutions</h5>
            <p>
              <span class="text-muted">Empowering Farmers Through Modern, Sustainable Practices </span><br><br>

              Eastern Prime delivers end-to-end agricultural management solutions
              designed to help farmers and...
            </p>

            <router-link :to="{name: 'agricultural-management-solutions'}">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>
          </div>
        </div>
      </div>

      <!-- -->
      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2 h-100" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-3 p-xxl-4 d-flex flex-column services-card-body">
            <!-- Icon -->
<!--            <i class="bi bi-info-circle mb-4 display-6"></i>-->
            <div class="display-6 text-center">
              <img src="/img/icons/bolivian-girl.png" alt="" class="img-fluid" height="60" width="60">
            </div>

            <h5 class="mb-4 fw-bold custom-green text-center">Empowering Women and Youth</h5>
            <p>
              <span class="text-muted">Inclusive Growth Through Opportunity and Capacity Building</span>
              <br><br>

              At Eastern Prime, we are deeply committed to inclusive development.
              We recognize that women and youth...
            </p>

            <router-link :to="{name: 'empowering-women-and-youth'}">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>

          </div>
        </div>
      </div>


      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2 h-100" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-3 p-xxl-4 d-flex flex-column services-card-body">
            <!-- Icon -->
            <!--            <i class="bi bi-info-circle mb-4 display-6"></i>-->
            <div class="display-6 text-center">
              <img src="/img/icons/coach.png" alt="" class="img-fluid" height="60" width="60">
            </div>

            <h5 class="mb-4 fw-bold custom-green text-center">Inclusive Contract Farming Facilitation & Coaching</h5>
            <p>
              <span class="text-muted">Empowering Equitable Partnerships in Agriculture</span>
              <br><br>

              Inclusive Contract Farming (iCF) is a collaborative approach that fosters
              equitable relationships...
            </p>

            <router-link :to="{name: 'inclusive-contract-farming-facilitation-and-coaching'}">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>

          </div>
        </div>
      </div>




    </div> <!-- end of row-->

    <div class="row justify-content-center">

      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-2 p-xxl-4 d-flex flex-column services-card-body">
            <!-- Icon -->
            <div class="display-6 text-center">
              <img src="/img/icons/marketing.png" alt="" class="img-fluid" height="60" width="60">
            </div>
            <h5 class="mb-4 fw-bold custom-green text-center">Market Linkages</h5>
            <p>
              <span class="text-muted">Connecting Producers to Profitable and Sustainable Markets</span>
              <br><br>

              At Eastern Prime, we understand that production is only one part of
              the agricultural value chain—true ...
            </p>

            <router-link :to="{name: 'market-linkages'}">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>

          </div>
        </div>
      </div>


      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-2 p-xxl-4 d-flex flex-column services-card-body">
            <!-- Icon -->
            <div class="display-6 text-center">
              <img src="/img/icons/business.png" alt="" class="img-fluid" height="60" width="60">
            </div>
            <h5 class="mb-4 fw-bold custom-green text-center">Business Development and Training</h5>
            <p>
              <span class="text-muted">Building Stronger, Smarter, and More Resilient Agribusinesses</span>
              <br><br>

              At Eastern Prime, we provide specialized business development and
              training services to support the growth and sustainability...
            </p>

            <router-link :to="{name: 'business-development-and-training'}">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>

          </div>
        </div>
      </div>



      <div class="col-10 col-sm-6 col-lg-4 col-xl-3 mb-2" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-10 border-0 border-bottom border-4 border-custom-green shadow">
          <div class="card-body p-2 p-xxl-4 d-flex flex-column">
            <!-- Icon -->
            <div class="display-6 text-center">
              <img src="/img/icons/climate.png" alt="" class="img-fluid" height="60" width="60">
            </div>
            <h5 class="mb-4 fw-bold custom-green text-center">Climate-Friendly Initiatives</h5>
            <p>
              <span class="text-muted">Driving Sustainable Agriculture Through Innovation and
                Environmental Stewardship</span>
              <br><br>

              At Eastern Prime, we believe that sustainable agriculture is essential
              not only for food security but also for protecting our planet...
            </p>
            <router-link :to="{name: 'climate-friendly-initiatives'}">
              <h6 class="fw-bold learn-more"><span class="custom-green fw-bold">|</span> LEARN MORE</h6>
            </router-link>

          </div>
        </div>
      </div>


    </div><!--End of second row-->

    </div><!--    end of container-->


  </section><!-- /Services Section -->

</template>

<style scoped>
.card-body{
  height: 370px;
}
.custom-green{
  color: #5a9c0e !important;
}
.border-custom-green {
  border-bottom-color: #5a9c0e !important;
}
.learn-more {
  color: green;
}

</style>