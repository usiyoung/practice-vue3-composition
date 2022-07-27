<template lang="">
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/home" active-class="active" class="nav-link">
                Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" to="/about"
                >About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                active-class="active"
                class="nav-link"
                to="/posts/list"
                >게시글
              </router-link>
            </li>
            <li class="nav-item">
              <router-link active-class="active" class="nav-link" to="/nested"
                >Nested
              </router-link>
            </li>
          </ul>
          <form class="d-flex">
            <button @click="goPage" class="btn btn-outline-light" type="button">
              글쓰기
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goPage = () => {
  router.push('/posts/create');
};
</script>
<style lang=""></style>
