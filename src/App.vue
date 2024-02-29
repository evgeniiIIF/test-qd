<script setup lang="ts"></script>

<template>
  <main class="main">
    <router-view></router-view>
  </main>
  <router-view name="LeftSidebar"></router-view>
</template>

<style lang="scss">
.main {
  flex: 1 1 auto;
  padding: 30px 10px;
}
</style>
