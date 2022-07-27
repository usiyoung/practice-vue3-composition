<template lang="">
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post)"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/postItem.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();
const fetchPosts = async () => {
  try {
    ({ data: posts.value } = await getPosts());
  } catch (error) {
    console.log(error);
  }
};

fetchPosts();
const goPage = post => {
  router.push({
    name: 'detail',
    params: {
      id: post.id,
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
    },
  });
};
</script>

<style lang=""></style>
