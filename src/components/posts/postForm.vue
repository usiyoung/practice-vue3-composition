<script setup>
defineProps({
  title: String,
  content: String,
});
defineEmits(['update:title', 'update:content', 'update:data']);
</script>
<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input
          :value="title"
          @input="$emit('update:title', $event.target.value)"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          :value="content"
          @input="$emit('update:content', $event.target.value)"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <slot name="actions"></slot>
    </form>
  </div>
</template>
