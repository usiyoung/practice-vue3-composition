vbase
<template lang="">
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />

    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          v-model="form.title"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.content"
        ></textarea>
      </div>
      <div class="pt-4">
        <button class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button type="submit" @click="edit" class="btn btn-primary">
          수정
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const form = ref([]);
const id = route.params.id;

const goDetailPage = () => {
  router.push({
    name: 'detail',
    params: { id },
  });
};

const fetchPost = async () => {
  const { data } = await getPostById(id);
  form.value = { ...data };
  setForm(data);
};

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

const edit = async () => {
  try {
    const data = {
      ...form.value,
      createdAt: Date.now(),
    };
    await updatePost(id, data);
    goDetailPage();
  } catch (error) {
    console.error(error);
  }
};
fetchPost();
</script>
<style lang=""></style>
