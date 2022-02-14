<template>
<div>姓名：{{state.name}}</div>
<div>年龄：{{state.age}}</div>
<div>别名：{{aliasName.name}}</div>


<son/>
</template>

<script setup lang="ts">
import { provide,reactive,ref,readonly,InjectionKey,Ref} from 'vue';
import son from '@/components/son.vue'
defineProps(
  {
  msg:String
})

const aliasName = reactive({
  name:'张三三'
})
const state = 
  {
    name:ref('zhangsan'),
    age:ref(18)
  }

// 只读 readonly
// provide('age',readonly(state.age))
provide('age',state.age)
provide('name',state.name)
provide('aliasName',aliasName.name)
provide('fatherData',state)
setTimeout(()=>{
  state.name.value='lisi'
  state.age.value=50
  aliasName.name='李四'
},1000)
</script>