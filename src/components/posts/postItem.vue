<template lang="">
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ content }}
        </p>
        <p>{{ createdAt }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Number, Date],
  },
});
</script>
<style scoped>
.card-body {
  background: #eaedff;
  color: black;
}
</style>
