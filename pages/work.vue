<template>
  <div>
    <div id="my_work" :class="{ 'active blur': show }">
      <div class="text-center">
        <header class="has-bg">
          <img src="@/assets/images/h1-bg.png" alt="h1 bg">
          <h1>My Work</h1>
        </header>
      </div>
      <!-- <div class="filters">
        <button v-for="(item, i) in buttons" :key="i" @click="filter(item.value)" data-group="all" :class="{'active' : item.active}">
          <h4>{{ item.text }}</h4>
        </button>
      </div> -->
      <div class="container">
        <div class="row work-items">
          <div class="col-lg-4 item" v-for="(item, i) in works" @click="viewItem(item)" :key="i" :data-groups="item.groups">
            <div class="wrap">
              <img :src="item.image" alt="work">
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="modal" appear>
      <view-work-modal v-if="show" :show="show" :item="selectedItem" @close="closeModal()"></view-work-modal>
    </transition>
  </div>
</template>

<script setup>
// import Shuffle from 'shufflejs'
import ViewWorkModal from "@/components/ViewWorkModal.vue";
import workImage1 from '@/assets/images/works/work-1.png'
import workImage2 from '@/assets/images/works/work-2.png'
import workImage3 from '@/assets/images/works/work-3.png'
import workImage4 from '@/assets/images/works/work-4.png'
import workImage5 from '@/assets/images/works/work-5.png'

useHead({
  titleTemplate: '%s | My Work',
})

const show = ref(false)
const selectedItem = ref({})

// const buttons = ref([
//   {
//     text: 'All',
//     value: 'all',
//     active: true
//   },
//   {
//     text: 'Putti',
//     value: 'putti',
//     active: false
//   },
//   {
//     text: 'Yondu',
//     value: 'yondu',
//     active: false
//   },
//   {
//     text: 'Fourello',
//     value: 'fourello',
//     active: false
//   }
// ])

// const shuffleInstance = ref(null)

const works = ref([
  {
    image: workImage1,
    title: "Barbershop Co.",
    description: "BarbershopCo application can help both customers and the barbershop to manage the schedules online.",
    client: "Barbershop Co.",
    completed: "DECEMBER 2023",
    skills: "Vue.js, HTML, CSS, Bootstrap, JavaScript",
    projectLink: false,
    groups: '["putti"]'
  },
  {
    image: workImage2,
    title: "Putti Apps Admin Template",
    description: "Admin template for putti apps future projects/clients",
    client: "Putti Apps",
    completed: "March 2023",
    skills: "Vue.js, Vuetify, HTML, CSS, JavaScript",
    projectLink: "#",
    groups: '["putti"]'
  },
  {
    image: workImage3,
    title: "All Things Considered (AllTC)",
    description: "All Things Considered (AllTC) is a platform where you can search or discover tons of brands and associations.",
    client: "AllTC",
    completed: "March 2023",
    skills: "Vue.js, HTML, CSS, JavaScript",
    projectLink: "https://app.alltc.co/",
    groups: '["fourello"]'
  },
  // {
  //   image: workImage4,
  //   title: "4. Antelope Canyon",
  //   description: "4. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
  //   client: "Cheetah Academy",
  //   completed: "December 29 2022",
  //   skills: "HTML, CSS, JavaScript",
  //   projectLink: "#",
  //   groups: '["fourello"]'
  // },
  // {
  //   image: workImage5,
  //   title: "5. Antelope Canyon",
  //   description: "5. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
  //   client: "Cheetah Academy",
  //   completed: "December 29 2022",
  //   skills: "HTML, CSS, JavaScript",
  //   projectLink: "#",
  //   groups: '["yondu"]'
  // },
  // {
  //   image: workImage6,
  //   title: "6. Antelope Canyon",
  //   description: "6. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
  //   client: "Cheetah Academy",
  //   completed: "December 29 2022",
  //   skills: "HTML, CSS, JavaScript",
  //   projectLink: "#",
  //   groups: '["yondu"]'
  // }
])

// const filter = (tab) => {
//   let toActiveIndex = buttons.value.findIndex(item => item.value == tab)
//   let toNotActiveIndex = buttons.value.findIndex(item => item.active == true)

//   buttons.value[toNotActiveIndex].active = false
//   buttons.value[toActiveIndex].active = true

//   shuffleInstance.value.filter(buttons.value[toActiveIndex].value)
// }

const viewItem = (item) => {
  show.value = true
  selectedItem.value = item
}

const closeModal = () => {
  show.value = false
  selectedItem.value = {}
}

// onMounted(() => {
//   setTimeout(() => {
//     shuffleInstance.value = new Shuffle(document.querySelector('#my_work .work-items'), {
//       itemSelector: '.item'
//     });
//     shuffleInstance.value.filter('all')
//   }, 1000);
// })
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  // transition: opacity .5s ease;
  transition: opacity .15s linear;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>