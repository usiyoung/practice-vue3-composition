<template lang="">
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />

    <post-form
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <div class="pt-4">
          <button class="btn btn-outline-dark me-2">목록</button>
          <button type="submit" class="btn btn-primary">저장</button>
        </div>
      </template>
    </post-form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import postForm from '@/components/posts/postForm.vue';

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
