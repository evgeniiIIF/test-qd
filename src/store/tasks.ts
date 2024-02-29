import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { Task } from './tasks.types';

const DEFAULT_STATE = {
  tasks: [
    { id: 1, name: 'Задача 1' },
    { id: 2, name: 'Задача 2' },
    { id: 3, name: 'Задача 3' },
  ] as Task[],
};

export const tasksStore = defineStore('tasks', () => {
  const state = ref(DEFAULT_STATE);

  const getTasks = computed(() => {
    const localStorageTasks = localStorage.getItem('tasks');
    if (localStorageTasks) {
      state.value.tasks = JSON.parse(localStorageTasks);
    }

    return state.value.tasks;
  });

  const addTask = () => {
    const tasks = state.value.tasks;
    const newTaskId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask: Task = {
      id: newTaskId,
      name: 'Задача ' + newTaskId,
    };
    state.value.tasks.push(newTask);
    saveTasks();
  };

  const deleteTask = (targetTask: Task) => {
    if (state.value.tasks.length === 0) {
      return;
    }
    const newTasks = state.value.tasks.filter((task) => task.id !== targetTask.id);
    state.value.tasks = [...newTasks];
    saveTasks();
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(state.value.tasks));
  };

  return {
    state,
    getTasks,
    addTask,
    deleteTask,
  };
});
