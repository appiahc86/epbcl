<script setup>
 import {useRouter} from "vue-router";
 import ServicesSideComponent from "@/components/ServicesSideComponent.vue";

 const router = useRouter();

</script>

<template>
<div class="main">

  <!--  Page Banner-->
  <div class="page-title dark-background" data-aos="fade" style="background-image: url(/img/page-title-bg.jpg);">
    <div class="container position-relative">
      <h2 class="display-1">Access to Finance</h2>
    </div>
  </div><!--  Page Banner-->

<div class="container mb-5 mt-5">
  <div class="row">
    <div class="col-lg-8">
      <h4 class="text-success">Fueling Business Growth Through Strategic Financial Support</h4>
      <p>
        At Eastern Prime, we recognize that access to finance is a cornerstone
        of sustainable growth—whether you’re in agriculture, manufacturing, services,
        or any other sector. We are committed to helping businesses across industries
        unlock the capital they need to grow, innovate, and thrive in competitive markets.
      </p>
      <p>
        Our team works hand-in-hand with entrepreneurs, SMEs, and established
        enterprises to secure funding that supports business expansion, technological
        upgrades, market entry, and operational improvements. We bridge
        the gap between great ideas and the capital needed to realize them.
      </p>

      <h5 class="services-sub-heading text-success">Our Key Financial Support Services Include:</h5>

      <ul>
        <li>
          <b>Business Plan and Grant Proposal Development:</b>
          We develop comprehensive, professionally crafted business plans and funding
          proposals tailored to meet the expectations of banks, investors, and grant
          agencies. Our documents clearly articulate your business model,
          market potential, financial projections, and impact—giving you a
          competitive edge in securing funding.
        </li>

        <li>
          <b>Access to Capital Networks:</b>
          Eastern Prime connects clients with a broad spectrum of financial institutions,
          investment firms, donor organizations, and grant providers.
          Whether you’re looking for debt financing, equity investment,
          working capital, or startup funding, we identify and facilitate connections
          with the right partners.
        </li>
        <li>
          <b>Financial Strategy Advisory:</b>
          We offer personalized guidance on financial planning, capital
          structuring, and funding readiness. This includes preparing you
          for investor meetings, optimizing funding strategies, and advising
          on regulatory compliance to ensure long-term financial sustainability.
        </li>
        <li>
          <b>Sector-Specific Expertise:</b>
          While we have deep roots in agriculture, our expertise extends to
          sectors such as renewable energy, manufacturing, ICT, logistics,
          and professional services. We understand the unique financial dynamics of each
          industry and tailor our support accordingly.
        </li>
      </ul>
      <p>
        Whether you’re a farmer looking to modernize operations or a tech
        startup preparing for a funding round, Eastern Prime provides the insights,
        tools, and networks to help you access the financial resources needed to
        move your business forward with confidence.
      </p>

    </div>

    <ServicesSideComponent :AccessToFinance="true"/>

  </div>
</div>

</div>
</template>

<style scoped>


</style>