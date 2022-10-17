<template lang="">
  <div>
    <h1>home view</h1>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">상세페이지로</button>
    <hr class="my-4" />
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const goAboutPage = () => {
  router.push('/about');
};

const person = inject('person');
console.log(person.age);
</script>
<style lang=""></style>
