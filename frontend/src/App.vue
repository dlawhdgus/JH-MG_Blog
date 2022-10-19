<template>
  <div>
    <router-link :to="{ name: 'HomeView' }">Home</router-link>
    <router-link :to="{ name: 'LoginView' }">Login</router-link>
    <router-link :to="{ name: 'ArticlesPublish' }">Publish</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
