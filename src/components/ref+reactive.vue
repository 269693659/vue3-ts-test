<template>
<div>{{msg}}</div>
<div>count:{{state.count}}</div>
<div>age:{{age}}</div>
<div>dbage:{{dbage}}</div>
<button @click="btn">点击count</button>
<button @click="btn1">点击age</button>
<div>{{count}}</div>
</template>

<script setup lang="ts">
import { ref,reactive,computed, toRefs } from 'vue';
type TCount = {
  count:number;
  double:number
}
defineProps(
  {
  msg:String
}
)
const age = ref(18) //ref:age2 = 18 早期是 const age = ref(18)的语法糖，3.2已经取消
const dbage = computed(()=>age.value*2)//用 dbage.value 引用
// dbage.value++ 会报错，计算属性只读，不能直接修改

const state:TCount = reactive({
  count:0,
  double:computed(()=>state.count * 2)
})
const btn = ()=>{
  // state.count和count是双数据绑定
  state.count++
  // count.value++
  console.log(count.value,state);

}
const btn1 = ()=>{
  age.value++
}
// 使用ref的值
console.log(age.value);
// 使用reactive的值 是proxy类型
// 要改变count 可用count.value
const {count} = {...toRefs(state)}
// 或者
// const count = toRefs(state).count


</script>