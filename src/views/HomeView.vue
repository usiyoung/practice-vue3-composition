<template lang="">
  <div>
    <h1>home view</h1>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">상세페이지로</button>
    <hr class="my-4" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goAboutPage = () => {
  router.push('/about');
};
</script>
<style lang=""></style>
