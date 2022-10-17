<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a
          class="page-link"
          @click.prevent="$emit('page', props.currentPage - 1)"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        v-for="(page, i) in props.pageCount"
        :key="i"
        :class="{ active: props.currentPage === page }"
      >
        <a
          class="page-link"
          @click.prevent="$emit('page', props.currentPage)"
          >{{ page }}</a
        >
      </li>

      <li class="page-item" :class="isNextPage">
        <a
          class="page-link"
          @click.prevent="$emit('page', props.currentPage + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});

defineEmits(['page']);

const isPrevPage = computed(() => ({ disabled: props.currentPage < 2 }));

const isNextPage = computed(() => ({
  disabled: !(props.currentPage < props.pageCount),
}));
</script>

<style lang="scss" scoped></style>
