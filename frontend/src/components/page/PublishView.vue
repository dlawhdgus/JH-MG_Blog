<template>
  <div>
    <h4>글 작성</h4>
    <button @click="onPublish">저장</button>
    <editor-view v-model="title"></editor-view>
    <editor-view v-model="subtitle"></editor-view>
    <editor-view v-model="contents"></editor-view>
  </div>
</template>

<script>
import EditorView from '../EditorView.vue';
export default {
  components: {
    EditorView,
  },
  data() {
    return {
      title: {
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '제목을 입력하세요',
            }
          },
        ]
      },
      subtitle: {
        blocks: [
          {
            type: 'paragraph',
            data: {
              text: '부제목을 입력하세요',
            }
          },
        ]
      },
      contents: {}
    };
  },
  methods: {
    onPublish: async function () {
      const title = this.title.blocks[0].data.text
      const subtitle = this.subtitle.blocks[0].data.text
      const contents = this.contents.blocks

      const body = {
        title,
        subtitle,
        body: contents
      }
      const response = this.$axios.post("/api/board", body, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
      console.log(response)
    },
  },
};
</script>
<style scoped>

</style>
