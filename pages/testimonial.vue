<template>
<div id="testimonial">
  <div class="text-center">
    <header class="has-bg">
      <img src="@/assets/images/h1-bg.png" alt="h1 bg">
      <h1>Testimonial</h1>
    </header>
  </div>
  <section class="main-section">
    <div class="images">
      <img v-for="(item, i) in users" :key="i" @click="selectPerson(i)" :src="item.img" alt="testimonial" :class="{ 'active': item.active }">
    </div>
    <div class="comments">
      <div class="item" :class="{ 'active': item.active }" v-for="(item, i) in users" :key="i">
        <div class="box">
          <p> 
            <span>&lsquo;&lsquo;</span>
            {{ item.testimonials }}
            <span>&rsquo;&rsquo;</span>
          </p>
        </div>
        <div class="writer">
          <span class="name">{{ item.name }},</span>
          <span class="field">{{ item.position }}</span>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import personImage1 from '@/assets/images/testimonials/person-1.png'
import personImage2 from '@/assets/images/testimonials/person-2.png'
import personImage3 from '@/assets/images/testimonials/person-3.png'
import personImage4 from '@/assets/images/testimonials/person-4.png'
import personImage5 from '@/assets/images/testimonials/person-5.png'

const active = ref(3)
const users = ref([
  {
    active: false,
    img: personImage1,
    name: 'Edgar Florentin',
    position: 'CEO of company',
    testimonials: '1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  },
  {
    active: false,
    img: personImage2,
    name: 'Edgar Florentin',
    position: 'CEO of company',
    testimonials: '2. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  },
  {
    active: true,
    img: personImage3,
    name: 'Edgar Florentin',
    position: 'CEO of company',
    testimonials: '3. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  },
  {
    active: false,
    img: personImage4,
    name: 'Edgar Florentin',
    position: 'CEO of company',
    testimonials: '4. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  },
  {
    active: false,
    img: personImage5,
    name: 'Edgar Florentin',
    position: 'CEO of company',
    testimonials: '5. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
  }
])

const selectPerson = (i) => {
  users.value.forEach(item => {
    item.active = false
  });
  users.value[i].active = true
}

</script>

<style lang="scss" scoped>

</style>