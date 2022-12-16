<template>
  <div>
    <header-bar />
    <router-view />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
export default {
  name: "App",
  components: {
    HeaderBar
  },
  data: () => ({
    //
  }),
};
</script>
