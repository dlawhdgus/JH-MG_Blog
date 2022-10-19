<template>
  <section>
    <h2>Home</h2>
    <ul v-if="boards && boards.length > 0">
      <li v-for="(board, idx) in boards" :key="idx">
        <router-link
          :to="{ name: 'ArticlesArticle', params: { id: board._id } }"
        >
          <h4>{{ board.title }}</h4>
          <h6>{{ board.subtitle }}</h6>
          <p>{{ board.body }}</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boards: [],
    };
  },
  created() {
    this.fetchCurationBoard();
    // this.$axios
    //   .post("/api/auth/sign-up", {
    //     email: "hahaha@naver.com",
    //     nickname: "hong",
    //     password: "123",
    //     introduce: "safasfsafsda",
    //   })
    //   .catch((res) => console.log(res));
  },
  methods: {
    fetchCurationBoard: async function () {
      const response = await this.$axios.get("/api/board");
      console.log(response);

      this.boards = response.data;
    },
  },
};
</script>

<style></style>
