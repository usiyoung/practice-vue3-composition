<template lang="">
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input type="text" class="form-control" v-model="params.title_like" />
        </div>
        <div class="col col-3">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
        <hr />
      </div>
    </form>
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

    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: params._page === 1 }">
          <a class="page-link" @click.prevent="--params._page">Previous</a>
        </li>
        <li
          :class="{ active: params._page === page }"
          class="page-item"
          v-for="(page, i) in pageCount"
          :key="i"
        >
          <a class="page-link" @click.prevent="params._page = page">{{
            page
          }}</a>
        </li>

        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a class="page-link" @click.prevent="++params._page">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/postItem.vue';
import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const text = ref(null);
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
