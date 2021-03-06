import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/experiences",
    name: "experiences",
    component: () =>
      import(/* webpackChunkName: "experiences" */ "../views/Experiences.vue")
  },
  {
    path: "/educations",
    name: "educations",
    component: () =>
      import(/* webpackChunkName: "educations" */ "../views/Educations.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../components/ContactForm.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  base: "/myportfolio/",
  routes
});

export default router;
