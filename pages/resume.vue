<template>
<div id="my_resume">
  <div class="text-center">
    <header class="has-bg">
      <img src="@/assets/images/h1-bg.png" alt="h1 bg">
      <h1>My Resume</h1>
    </header>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xl-6 education">
        <header class="custom">
          <h2>Education</h2>
        </header>
        <div class="items">
          <div class="item last">
            <div class="icon">
              <i class="las la-university"></i>
            </div>
            <div class="box">
              <span class="year">2017-2020</span>
              <h2 class="title">BS Information Technology</h2>
              <p>Technological Institute of the Philippines</p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="las la-university"></i>
            </div>
            <div class="box">
              <span class="year">2014-2016</span>
              <h2 class="title">Associate in Computer Tech</h2>
              <p>Technological Institute of the Philippines</p>
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <i class="las la-university"></i>
            </div>
            <div class="box">
              <span class="year">2010 - 2014</span>
              <h2 class="title">High School</h2>
              <p>Mount Carmel School of Polillo</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 experience">
        <div class="text-center">
          <header class="custom">
            <h2>Experience</h2>
          </header>
          <div class="items">
            <div class="item last">
              <div class="icon">
                <i class="las la-briefcase"></i>
              </div>
              <div class="box">
                <span class="year">APRIL 2023 – PRESENT</span>
                <h2 class="title">Front-End Web Developer</h2>
                <p>AB Leasure Exponent Inc.</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="las la-briefcase"></i>
              </div>
              <div class="box">
                <span class="year">AUGUST 2022 – MARCH 2023</span>
                <h2 class="title">Front-End Web Developer</h2>
                <p>Putti Apps</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="las la-briefcase"></i>
              </div>
              <div class="box">
                <span class="year">MAY 2020 – AUGUST 2022</span>
                <h2 class="title">Front-End Web Developer</h2>
                <p>Yondu Inc.</p>
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <i class="las la-briefcase"></i>
              </div>
              <div class="box">
                <span class="year">JULY 2019 – May 2020</span>
                <h2 class="title">Front-End Web Developer</h2>
                <p>Fourello Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | My Resume',
})
</script>

<style lang="scss" scoped>

</style>