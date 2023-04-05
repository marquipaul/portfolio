<template>
  <div id="home">
    <!-- <section id="home"> -->
        <div class="meteor-shower">
          <span class="meteor" v-for="i in 20" :key="i"></span>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 info">
              <!-- <img class="person-circle" src="assets/images/person-circle.png" alt="person circle"> -->
              <h1><span>Hi,</span> I am Paul Marquita,</h1>
              <div class="field"><h2></h2></div>
              <p>
                I develop functional Front-End Web solutions in all sizes.
                Using one of the most well maintained and popular JavaScript Framework to develop your dream application.
              </p>
              <a class="btn-custom-blue" :href="MyCV" download>Download CV</a>

              <!-- <h3>Message me</h3> -->

              <div class="socials">
                <ul>
                  <li>
                    <a href="mailto:pamarquita@gmail.com">
                      <i class="las la-envelope"></i>
                      <span>pamarquita@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/paul-adrian-marquita-69151810a/">
                      <i class="lab la-linkedin-in"></i> 
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/marquipaul">
                      <i class="lab la-github"></i>
                      <span>GitHub</span>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <!-- <div class="col-lg-6 image">
              <img src="assets/images/person-home.png" alt="person home">
            </div> -->
  
          </div>
        </div>
      <!-- </section> -->
  </div>
</template>
<script setup>
import MyCV from '@/assets/files/CV.pdf'
const { $typed } = useNuxtApp()

useHead({
  titleTemplate: '%s | Hero',
  meta: [
    { hid: 'og-title', property: 'og:title', content: 'Paul | Portfolio' },
    { hid: 'og-image', property: 'og:image', content: 'https://marquipaul.github.io/portfolio/og-image.png' },
  ],
})

onMounted(() => {
  setTimeout(() => {
    $typed('.field h2', ['Front-End web developer', 'Vue.js/Nuxt.js, Vuetify, Bootstrap', 'JavaScript, CSS, SCSS, HTML5'])
  }, 400);
})


</script>