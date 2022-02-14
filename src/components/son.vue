<template>
<div>
父亲姓名：{{fatherName}}
</div>
<div>
父亲姓名：{{fatherage}}
</div>
<div>
父亲massage：{{fatherData.age}}
</div>
``````````````
<grandSonVue/>
</template>
<script setup lang="ts">
import { inject ,ref,Ref,watch,watchEffect} from 'vue';
import grandSonVue from './grandSon.vue';
interface IInjectData {
    age:Ref<number>,
    name:Ref<string>
}

// 如果父级没有提供对应的属性，才会取默认值
// 数值改变会改变父级的值（如果父级数值没有加readonly）
let fatherName = inject('name','默认值')
let fatherage = inject('age')
// 改变值也会改变父级的值
let obj:IInjectData={
    age:ref(0),
    name:ref('')
}
let fatherData = inject<IInjectData>('fatherData',obj)

watchEffect(()=>{
    console.log('父亲姓名被修改',fatherName);
    console.log('父亲年龄被修改',fatherage);
    
})
setTimeout(()=>{
    let t = fatherage as unknown as Ref<number>
    if(t.value){
        fatherage = t.value++
        fatherData.age.value=89
    }else{
        console.log(fatherage);
    }
},2000)
</script>