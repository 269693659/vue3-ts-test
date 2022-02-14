<template>
<div>{{msg}}</div>
<div>{{state.count}}</div>
<div>{{age}}</div>
</template>

<script setup lang="ts">
import { ref,reactive,watch,watchEffect} from 'vue';
defineProps(
  {
  msg:String
})
const state = reactive({count:0})
const age = ref(0)
// 侦听一个 getter 函数
// watch(()=>state.count,(n,o)=>{
//   console.log('监听',n,o);
// })

// 直接侦听一个 ref
// watch(age,(n,o)=>{
//   console.log('监听',n,o);
// })

// 立即执行 immediate:true 默认false
// watch(()=>state.count,(n,o)=>{
//   console.log('监听',n,o);
// },{
//   immediate:true
// })

// 深层监听 deep:true 默认false
// watch(()=>state,(n,o)=>{
//   console.log('监听',n,o);
// },{deep:true})

// 监听多个 用于监听多个ref  如果state是对象，只能监听state,不能监听其属性
// watch([state,age],([sn,an],[so,ao])=>{
//   console.log('watch' ,'第一个新值',sn,'第二个新值',an,'第一个旧值',so,'第二个旧值',ao);
// },{deep:true})

watchEffect(()=>{
  
   console.log('在onMounted之前执行',state.count)
   console.log('age',age.value)
}
)

setTimeout(()=>{
  state.count++
  age.value++
},1000)
</script>