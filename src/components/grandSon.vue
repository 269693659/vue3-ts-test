<template>
<div>
爷爷姓名：{{fatherName}}
</div>
<div>
爷爷姓名：{{fatherage}}
</div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
const fatherName = inject('name')
const fatherage = inject('age')
</script>