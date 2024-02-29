import { storeToRefs } from 'pinia';
import { tasksStore } from './tasks';

export const useTasksStore = () => {
  const { state, getTasks } = storeToRefs(tasksStore());
  const { addTask, deleteTask } = tasksStore();
  return {
    state,
    getters: {
      getTasks,
    },
    actions: {
      addTask,
      deleteTask,
    },
  };
};
