<script setup lang="ts">
import { useTasksStore } from '../store/tasks.service';

const { addTask, deleteTask } = useTasksStore().actions;
const { getTasks } = useTasksStore().getters;
</script>
<template>
  <ul class="task-list">
    <li v-for="task of getTasks" :key="task.id" class="task-list__item">
      <div class="task-list__item-name">{{ task.name }}</div>
      <button @click="deleteTask(task)" class="task-list__item-delete button" type="button">
        Удалить
      </button>
    </li>
  </ul>
  <button @click="addTask()" class="button button--add">Add</button>
</template>

<style lang="scss">
.task-list {
  margin-bottom: 24px;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border: 1px solid #9c9b9b;
    background: #f8e1e1;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}
.button {
  padding: 4px 8px;
  cursor: pointer;

  &--add {
    width: 100%;
    padding: 24px;
  }
}
</style>
