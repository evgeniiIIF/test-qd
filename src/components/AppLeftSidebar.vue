<template>
  <aside class="left-sidebar">
    <router-link to="/" class="left-sidebar__link">Вернуться на главную</router-link>
  </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.left-sidebar {
  flex: 0 0 15%;
  order: -1;
  height: 100%;
  padding: 30px 10px;
  background: #eee;
  cursor: pointer;

  &__link {
    display: block;
    height: 100%;
  }
}
</style>
