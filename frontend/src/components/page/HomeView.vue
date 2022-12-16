<template>
  <section>
    <h2>Home</h2>
    <ul v-if="boards && boards.length > 0">
      <li v-for="(board, idx) in boards" :key="idx">
        <router-link
          :to="{ name: 'ArticlesArticle', params: { id: board._id } }"
        >
          <h2>{{ board.title }}</h2>
          <h4>{{ board.subtitle }}</h4>
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
  },
  methods: {
    fetchCurationBoard: async function () {
      const { data } = await this.$axios.get("/api/board");
      console.log(data);

      this.boards = data;
    },
  },
};
</script>

<style></style>
