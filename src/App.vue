<template>
  <div id="app">
    <CatalogView />
    <Sidebar />
  </div>
</template>

<script>
import CatalogView from "./views/CatalogView.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    CatalogView,
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
</style>
