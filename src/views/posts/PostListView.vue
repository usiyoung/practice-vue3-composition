<template lang="">
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter v-model:title="params.title" v-model:limit="params._limit" />
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

    <Pagination
      :currentPage="params._page"
      :pageCount="pageCount"
      @page="page => (params._page = page)"
      class="mt-5"
      aria-label="Page navigation example"
    >
    </Pagination>
  </div>
</template>

<script setup>
import PostFilter from '@/components/posts/postFilter.vue';
import PostItem from '@/components/posts/postItem.vue';
import Pagination from '@/components/AppPagination.vue';
import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);

const router = useRouter();

const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});

// pagination
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});

const totalCount = ref(0);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);

    posts.value = data;
    console.log(headers);
    totalCount.value = headers['x-total-count'];
  } catch (error) {
    console.log(error);
  }
};

watchEffect(fetchPosts);
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
