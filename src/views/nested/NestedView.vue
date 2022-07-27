<template lang="">
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item mr-3">
        <RouterLink
          :to="{ name: 'NestedOne', replace: true }"
          class="nav-link"
          active-class="active"
          >Nested One</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink
          :to="{ name: 'NestedTwo', replace: true }"
          class="nav-link"
          active-class="active"
          >Nested Two</RouterLink
        >
      </li>
    </ul>
    <hr class="my-4" />
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
