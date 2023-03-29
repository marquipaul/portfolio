<template>
  <div class="modal d-block show"  aria-labelledby="" aria-hidden="true" id="workModal" tabindex="-1" ref="modalEle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <button @click="$emit('close')" type="button" class="modal-close-button" data-bs-dismiss="modal" aria-label="Close">
            <i class="las la-times"></i>
          </button>
          <img :src="item.image" alt="work">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-7 left">
                <h2 class="title">{{ item.title }}</h2>
                <p class="description">{{ item.description }}</p>
              </div>
              <div class="col-lg-5 right">
                <div class="client mb-3">
                  <i class="las la-user-alt"></i>
                  <span class="title">Client:</span>
                  <span class="value">{{ item.client }}</span>
                </div>
                <div class="completed mb-3">
                  <i class="las la-calendar-check"></i>
                  <span class="title">Completed:</span>
                  <span class="value">{{ item.completed }}</span>
                </div>
                <div class="skills">
                  <i class="las la-flask"></i>
                  <span class="title">Skills:</span>
                  <span class="value">{{ item.skills }}</span>
                </div>
                <div class="project-link">
                  <i class="las la-link"></i>
                  <a href="">Project Link</a>
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
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.d-block {
  transition: opacity .15s linear;
}
</style>