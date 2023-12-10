<template>
  <div id="sidebar" :class="{ 'open': open }">
    <div @click="open = !open" class="toggle-sidebar">
      <i class="las la-bars"></i> 
    </div>
    <div class="logo">
      <h2>PM</h2>
    </div>
    <nav>
      <ul>
        <li v-for="(item, i) in links" :key="i">
          <nuxt-link @click="open = false" :to="item.path" class="inner-link" :class="{ 'active': item.path == route.path }">
            <i :class="'las ' + item.icon"></i>
            <span>{{ item.text }}</span>
          </nuxt-link>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute()
  const open = ref(false)
  const links = ref([
    {
      path: '/',
      text: 'Home',
      icon : 'la-home'
    },
    {
      path: '/about',
      text: 'About Me',
      icon : 'la-address-card'
    },
    {
      path: '/resume',
      text: 'My Resume',
      icon : 'la-file'
    },
    {
      path: '/work',
      text: 'My Work',
      icon : 'la-briefcase'
    },
    // {
    //   path: '/testimonial',
    //   text: 'Testimonial',
    //   icon : 'la-comment-alt'
    // },
    // {
    //   path: '/contact',
    //   text: 'Contact Me',
    //   icon : 'la-phone'
    // }
  ])
</script>

<style lang="scss" scoped>

</style>