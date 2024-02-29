import { createRouter, createWebHistory } from 'vue-router';
import HomePageVue from '../pages/HomePage.vue';
import TaskListVue from '../pages/TaskList.vue';

const routes = [
  { path: '/', component: HomePageVue },
  {
    path: '/task-list',
    components: {
      default: TaskListVue,
      LeftSidebar: () => import('../components/AppLeftSidebar.vue'),
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
