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
        <h2 class="display-1">Business Development and Training</h2>
      </div>
    </div><!--  Page Banner-->

    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="text-success">Building Stronger, Smarter, and More Resilient Agribusinesses</h4>
          <p>
            At Eastern Prime, we provide specialized business development and training
            services to support the growth and sustainability of agricultural and
            agri-related enterprises. We understand that success in today’s competitive
            landscape requires more than just strong production—it demands sound management,
            financial discipline, and a clear growth strategy.
          </p>
          <p>
            Our business development solutions are designed to enhance operational efficiency,
            improve financial stability, and position enterprises for long-term success.
            Whether you’re a farmer-owned cooperative, a growing agribusiness, or a startup,
            we offer practical tools and expert guidance to help you run your business more
            effectively and profitably.
          </p>

          <h5 class="services-sub-heading text-success">Our Core Services Include:</h5>

          <ul>
            <li>
              <b>Record Keeping and Bookkeeping Services:</b>
              Proper financial records are essential for transparency, accountability,
              and business decision-making. We provide easy-to-use systems and hands-on
              support to help clients maintain accurate records of income, expenses,
              inventory, and payroll. These services are particularly valuable for
              accessing loans, grants, and investment opportunities.
            </li>

            <li>
              <b>Financial Reporting and Compliance:</b>
              We prepare detailed financial reports that meet both industry and regulatory
              standards. These include balance sheets, income statements, and cash flow
              analyses tailored to the agricultural sector. Our services also ensure
              that clients remain compliant with tax, audit, and reporting requirements—building
              credibility with stakeholders.
            </li>
            <li>
              <b>Business Health Checks and Diagnostic Assessments:</b>
              Through in-depth assessments, we evaluate the overall health of a business—identifying
              operational gaps, financial risks, and areas for growth. Our diagnostic tools offer
              clear, actionable insights on how to optimize performance, reduce inefficiencies,
              and capitalize on emerging opportunities.
            </li>
            <li>
              <b>Tailored Training Programs:</b>
              We offer practical, results-oriented training in core business skills,
              including entrepreneurship, cost management, marketing, pricing strategies,
              customer relations, and supply chain management. Training is customized to
              the needs of each client and delivered through workshops, one-on-one coaching,
              and digital platforms.
            </li>
            <li>
              <b>Strategic Business Planning and Growth Advisory:</b>
              Eastern Prime supports clients in developing growth-focused business plans
              and operational strategies. This includes market research, SWOT analysis,
              value chain positioning, and investment readiness planning—ensuring that
              businesses are equipped to scale and adapt to changing market conditions.
            </li>
            <li>
              <b>Enterprise Formalization and Registration Support:</b>
              We help informal businesses transition into formally registered entities,
              enabling them to access wider markets, financial services, and government
              support programs. This includes guidance on legal registration, licensing,
              taxation, and institutional compliance.
            </li>

          </ul>
          <p>
            Our approach combines technical expertise with real-world experience,
            ensuring that clients not only understand sound business principles but can
            also apply them effectively. At Eastern Prime, we believe that thriving agribusinesses
            are the engine of rural development and economic empowerment—and we’re here to help you
            build a stronger, more resilient enterprise from the ground up.
          </p>

        </div>

        <ServicesSideComponent :BusinessDevelopmentAndTraining="true"/>

      </div>
    </div>

  </div>
</template>

<style scoped>


</style>