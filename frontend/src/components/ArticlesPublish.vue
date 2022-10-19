<template>
  <div>
    <button @click="onSubmit">제출</button>
    <div>
      <h4>글 작성</h4>
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: "입력...",
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [StarterKit],
      onUpdate: () => {
        // HTML
        this.$emit("input", this.editor.getHTML());
        console.log(JSON.stringify(this.editor.getJSON()));

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },
  methods: {
    onSubmit: function () {
      const body = {
        title: "tsafas",
        subtitle: "testafsaf",
        body: "hahahah",
      };
      this.$axios
        .post("/api/board", body, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        })
        .then(() => alert("글 생성 완료"));
    },
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
