<template>
    <div class="editor-view">
        <div ref="editorjs"></div>
    </div>
</template>

<script>

import EditorJS from '@editorjs/editorjs';

export default {
    props: {
        value: {
            type: Object
        }
    },
    data() {
        return {
            editor: undefined
        }
    },
    mounted() {
        const $vue = this
        const editorjs = this.$refs.editorjs
        this.editor = new EditorJS({
            holder: editorjs,
            data: this.value,
            onChange: async function (api) {
                const content = await api.saver.save()
                $vue.$emit('input', content)
            }
        });
    }
}
</script>

<style>
    .codex-editor__redactor {
        padding: unset !important;
    }
</style>