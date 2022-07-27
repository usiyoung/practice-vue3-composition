<template lang="">
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />

    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input
          type="text"
          v-model="form.title"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button class="btn btn-outline-dark me-2">목록</button>
        <button type="submit" class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createPost } from '@/api/posts';

const router = useRouter();

const form = ref({
  title: null,
  content: null,
});

const save = async () => {
  try {
    let data = {
      ...form.value,
      createdAt: Date.now(),
    };
    await createPost(data);
    goListPage();
  } catch (error) {
    console.log(error);
  }
};

const goListPage = () => router.push({ name: 'list' });
</script>
<style lang=""></style>
