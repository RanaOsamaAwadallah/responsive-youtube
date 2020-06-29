import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "../views/search-page.vue";
import VideoPage from "../views/video-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: {
      name: "Search",
    },
  },
  {
    path: "/",
    redirect: {
      name: "Search",
    },
  },
  {
    path: "/search",
    name: "Search",
    component: SearchPage,
    props: (route) => ({
      query: route.query.query,
    }),
  },
  {
    path: "/video/:id",
    name: "Video",
    component: VideoPage,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
