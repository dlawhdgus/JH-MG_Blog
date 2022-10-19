<template>
  <div>
    <input v-model="email" />
    <input v-model="password" />
    <button @click="login">로그인</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      token: "",
    };
  },
  methods: {
    login: function () {
      this.$axios
        .post("/api/auth/sign-in", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.token = res.data.slice(21);
            localStorage.setItem("token", JSON.stringify(this.token));
          }
        });
    },
  },
};
</script>

<style></style>
