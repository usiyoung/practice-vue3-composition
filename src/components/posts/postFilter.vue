<script setup>
defineProps({
  title: {
    type: String,
  },
  limit: {
    type: Number,
  },
});
defineEmits(['update:title', 'update:limit']);
</script>

<template>
  <form>
    <div class="row g-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        />
      </div>
      <div class="col col-3">
        <select
          :value="limit"
          @input="$emit('update:limit', $event.target.value)"
          class="form-select"
        >
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
      <hr />
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
