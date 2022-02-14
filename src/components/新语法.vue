<template>
  <h1>{{ msg }}</h1>
  <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
// 扩展vscode插件 Volar 或者 Vetur
// 使用 Volar要把 Vetur 禁用，不然有冲突
import {ref } from 'vue'
defineProps({
  msg: String
})
// ref: num = 100 语法糖3.2版本已取消
const count = ref(0)
const color = 'red'

</script>

<style scoped>
a {
  /* color:v-bind(color); */
}
</style>
