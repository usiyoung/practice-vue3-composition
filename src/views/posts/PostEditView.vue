vbase
<template lang="">
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />

    <post-form
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <div class="pt-4">
          <button class="btn btn-outline-danger me-2" @click="goDetailPage">
            취소
          </button>
          <button type="submit" @click="edit" class="btn btn-primary">
            수정
          </button>
        </div>
      </template>
    </post-form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/postForm.vue';

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
