<template lang="">
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button @click="remove" class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { deletePost, getPostById } from '@/api/posts';
import { ref } from 'vue';
const router = useRouter();
const route = useRoute();

const post = ref([]);
const id = route.params.id;

const fetchPosts = async () => {
  try {
    const { data } = await getPostById(id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};

fetchPosts();

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    await deletePost(id);
    goListPage();
  } catch (error) {
    console.error(error);
  }
};

const goEditPage = () => {
  router.push({
    name: 'edit',
    params: {
      id,
    },
  });
};

const goListPage = () => {
  router.push({
    name: 'list',
  });
};
</script>
<style lang=""></style>
