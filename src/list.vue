<template>
  <div>
    <h1>列表页</h1>
    <div @click="gohome()">返回首页</div>
  </div>
</template>
<script setup lang="ts">
    import {useRouter} from 'vue-router'
    const router = useRouter()
    function gohome(){
        router.push('/')
    }
</script>
<style>
</style>
