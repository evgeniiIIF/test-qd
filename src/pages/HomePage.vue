<script setup lang="ts"></script>

<template>
  <div class="home-page">
    <button class="home-page__button" type="button">
      <router-link to="/task-list">Перейти к списку задач</router-link>
    </button>
  </div>
</template>

<style lang="scss">
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__button {
    padding: 18px 24px;
    font-size: 29px;
    a {
      text-decoration: none;
    }
  }
}
</style>
