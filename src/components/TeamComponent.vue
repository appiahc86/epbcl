<script setup>
import {onBeforeRouteLeave} from "vue-router";
import { useMyStore } from "@/stores/home.js";

const store = useMyStore();

onBeforeRouteLeave((to, from, next) => {
  store.teamLazy = false;
  const closeBtns = document.getElementsByClassName("btn-close");
  if (closeBtns){
    for (const closeBtn of closeBtns) {
      closeBtn.click();
    }
  }

  next();
})
</script>

<template>
<div class="">

  <section class="py-5">
    <div class="container">
      <!-- Section Header -->
      <div class="row text-center">
        <div class="col-12">
          <h2 class="section-title">Meet Our Team</h2>
        </div>
      </div>

      <!-- Team Members -->
      <div class="row g-4 justify-content-center">

        <!-- Team Member 1 -->
        <div class="col-lg-3 col-md-6">
          <div class="team-member text-center p-4">

            <img  v-if="store.teamLazy"
                  alt="Team Member"
                  class="mb-4 shadow img-fluid"
                  v-lazy="{ src: '/img/team/tm1.jpeg',
              loading: '/img/team/dummy.svg',
               error: '', delay: 500 }"
            >
            <img  v-else
                  :src="'/img/team/tm1.jpeg'"
                  alt="Team Member"
                  class="img-fluid rounded shadow gallery-img my-image"
            >
            <h5 class="mb-1">Naydia Oduro-Awuku</h5>
            <p class="text-muted mb-3">CEO</p>
            <div class="badge bg-secondary p-2" style="cursor: pointer;"
                 data-bs-toggle="modal" data-bs-target="#exampleModal"
            >
              View Profile
            </div><!--            <div class="social-links">-->
<!--              <a href="#"><i class="fab fa-linkedin-in"></i></a>-->
<!--              <a href="#"><i class="fab fa-dribbble"></i></a>-->
<!--              <a href="#"><i class="fab fa-instagram"></i></a>-->
<!--            </div>-->
          </div>
        </div>

        <!-- Team Member 2 -->
        <div class="col-lg-3 col-md-6">
              <div class="team-member text-center p-4">

                <img  v-if="store.teamLazy"
                      alt="Team Member"
                      class="mb-4 shadow img-fluid"
                      v-lazy="{ src: '/img/team/tm2.jpeg',
              loading: '/img/team/dummy.svg',
               error: '', delay: 500 }"
                >
                <img  v-else
                      :src="'/img/team/tm2.jpeg'"
                      alt="Team Member"
                      class="img-fluid rounded shadow gallery-img my-image"
                >
                <h5 class="mb-1">Tasiame Edwin</h5>
                <p class="text-muted mb-3">Finance and Administration Manager</p>
                <div class="badge bg-secondary p-2" style="cursor: pointer;"
                     data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  View Profile
                </div>
              
<!--                <div class="social-links">-->
<!--                  <a href="#"><i class="fab fa-linkedin-in"></i></a>-->
<!--                  <a href="#"><i class="fab fa-twitter"></i></a>-->
<!--                  <a href="#"><i class="fab fa-instagram"></i></a>-->
<!--                </div>-->
              </div>
        </div>

      </div>
    </div>
  </section>


<!--  Profile Modal -->

  <!-- CEO Modal -->
  <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid" ref="profileContainer">

            <div class="row">
              <div class="col-lg-4">
                <img src="/img/team/tm1.jpeg" alt="Ellen" class="img-fluid">
                <p class="text-center mt-2">
                  <b>Naydia Oduro-Awuku</b><br>
                  <small class="text-muted text-uppercase">CEO</small>
                </p>

              </div>
              <div class="col-lg-8">
                <p>
                  I am a results-driven <b>Agribusiness and Business Development Consultant</b> with
                  a deep commitment to strengthening agricultural value chains, enhancing
                  rural livelihoods, and driving sustainable enterprise development across
                  Ghana and sub-Saharan Africa.
                </p>
                <p>
                  With over <b>7 years of professional experience</b>, I have led and supported
                  initiatives that empower smallholder farmers, cooperatives, agribusinesses,
                  and SMEs to grow their operations, improve market access, and build
                  resilience through innovative, market-led approaches. My work cuts across
                  multiple sectors—including maize, rice, cocoa, pineapple, palm oil, horticulture,
                  poultry, and aquaculture—where I have applied integrated strategies to tackle systemic
                  challenges and unlock opportunities for growth and inclusion.
                </p>
                <p>
                  My expertise lies in the design and implementation of inclusive agribusiness models,
                  business development strategies, and value chain interventions that are both
                  commercially viable and socially impactful. I have played a pivotal role in
                  facilitating <b>access to finance</b>, fostering <b>inclusive contract farming schemes</b>,
                  developing <b>market linkages</b>, and delivering <b>entrepreneurship and vocational
                  training programs</b> that enhance productivity and income generation.
                </p>
                <p>
                  I have successfully collaborated with <b>development partners, donor agencies,
                  financial institutions, government ministries, private investors, NGOs</b>, and
                  <b>community-based organizations</b>, delivering on complex assignments in areas
                  such as value chain finance, rural enterprise development, climate-smart agriculture,
                  project management, and impact evaluation.
                </p>
                <p>
                  What sets my work apart is a strong understanding of the <b>local context</b>,
                  combined with the ability to <b>translate high-level development goals
                  into practical, scalable, and sustainable interventions</b> that make a measurable difference.
                </p>

                <h5 class="fw-bold">Areas of Expertise</h5>
                <ul>
                  <li>Agribusiness Development & Value Chain Strengthening</li>
                  <li>Inclusive Business Model Design (e.g., Contract Farming, Embedded Services)</li>
                  <li>Access to Finance & Agricultural Credit Facilitation</li>
                  <li>Entrepreneurship & Vocational Skills Training</li>
                  <li>MSME Support & Enterprise Growth Strategies</li>
                  <li>Market Systems Development & Linkage Facilitation</li>
                  <li>Climate-Smart & Environmentally Sustainable Agriculture</li>
                  <li>Gender and Youth Inclusion in Agribusiness</li>
                  <li>Project Design, Monitoring, and Evaluation</li>
                  <li>Policy Advocacy & Stakeholder Engagement</li>
                </ul>

                <h5 class="fw-bold">Track Record</h5>
                <p>Some highlights of my recent work include:</p>
                <ul>
                  <li>Designing and implementing a <b>hybrid value proposition model</b> that supports
                    smallholder maize producers through input access, training, and market integration</li>
                  <li>Facilitating access to finance and technical assistance for over <b>100 SMEs and
                    agribusinesses</b> in diverse value chains.</li>
                  <li>Supporting the development of inclusive supply models for <b>input distribution</b>
                    for <b>high-value crops</b>.</li>
                  <li>Delivering targeted <b>entrepreneurship and financial literacy training</b> for rural
                    youth and women, promoting self-employment and resilience.</li>
                </ul>

                <h5 class="fw-bold">Let’s Collaborate</h5>
                <p>
                  I work with clients and partners across the development, public, and private
                  sectors to deliver high-impact projects and advisory services in agribusiness,
                  finance, and enterprise development. Whether you're:
                </p>
                <ul>
                  <li>A development agency seeking technical expertise</li>
                  <li>A private sector actor interested in sustainable sourcing</li>
                  <li>A government institution designing rural support programs</li>
                  <li>Or a cooperative or SME looking to grow your agribusiness</li>
                </ul>
                <p class="text-muted">…I can support your goals with insight, integrity, and results-oriented solutions.</p>
                <p>
                  <span class="fw-bold"><i class="bi bi-envelope"></i> Email: </span>naydiaawuku@gmail.com <br>
                  <span class="fw-bold"><i class="bi bi-telephone"></i> Phone: </span>0546449099 <br>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>


<!--  Admin Modal-->
  <div class="modal modal-lg fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid" ref="profileContainer">

            <div class="row">
              <div class="col-lg-4">
                <img src="/img/team/tm2.jpeg" alt="Ellen" class="img-fluid">
                <p class="text-center mt-2">
                  <b>Tasiame Edwin</b><br>
                  <small class="text-muted text-uppercase">Finance and Administration Manager</small>
                </p>

              </div>
              <div class="col-lg-8">
                <p>
                  A Chartered Accountant with over 9 years of experience in accounting, financial management,
                  and consultancy. He holds a Bachelor of Science degree in Business Administration
                  (Accounting option) from the University of Ghana, Legon, and is a member of the
                  Institute of Chartered Accountants, Ghana.
                </p>
                <p>
                   <b>Tasiame</b> has a strong track record
                  of delivering strategic financial insights and advisory services to clients across
                  various sectors, helping businesses improve efficiency, compliance, and profitability
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>



</div>
</template>

<style scoped>

.col-lg-8 {
  font-size: 0.9em;
  max-height: 500px;
  overflow: auto;
}

.team-member {
  transition: transform 0.3s ease-in-out;
}

.team-member:hover {
  transform: translateY(-10px);
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #0d6efd;
  margin: 0 5px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: #0d6efd;
  color: white;
  transform: translateY(-3px);
}

.team-member img {
  //width: 200px;
  //height: 200px;
  object-fit: cover;
  //border-radius: 50%;
  border: 5px solid #f8f9fa;
  transition: transform 0.3s ease;
}

.team-member:hover img {
  transform: scale(1.05);
}

.section-title::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color:  #5a9c0e;
  margin: 20px auto;
}
</style>