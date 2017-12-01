import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import Goodbye from "../components/Goodbye";
import Home from "../components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Hello",
      name: "Hello",
      component: Hello
    },
    {
      path: "/Goodbye",
      name: "Goodbye",
      component: Goodbye
    }
  ]
});
