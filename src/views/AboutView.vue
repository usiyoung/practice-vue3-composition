<template lang="">
  <div>
    <h1>about view</h1>
    <button class="btn btn-primary" @click="goHomePage">홈으로</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goHomePage = () => {
  router.push('/home');
};
</script>
<style lang=""></style>
