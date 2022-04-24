<template>
  <button v-on:click="add">v-on add</button>
  <hr />
  <!-- 父传子 props -->
  <HelloWorld :list="listarr" />
  <!-- 子传父 emit -->
  <a-divider>子传父 emit</a-divider>
  <EmitDemo @add="handleAdd" @clear="handleClear" />
  <div>子组件传来的值： {{ childVal }}</div>

  <a-divider>v-model</a-divider>
  <VmodelDemo v-model:list="listarr" />
  
  <a-divider>Socket.io</a-divider>
  <SocketIo />
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import EmitDemo from "./components/EmitDemo.vue";
import VmodelDemo from "./components/VmodelDemo.vue";
import SocketIo from "./pages/SocketIo.vue";
// 父传子
let list = ref([
  { key: new Date().getTime(), value: `item${new Date().getTime()}` },
]);
let listarr = ref([
  { key: new Date().getTime(), value: `item${new Date().getTime()}` },
]);
const add = () => {
  list.value.push({
    key: new Date().getTime(),
    value: `item${new Date().getTime()}`,
  });
};
// 子传父
const childVal = ref("");
const handleAdd = (value, val2, val3) => {
  console.log('val2', val2)
  console.log('val3', val3)
  childVal.value = value;
};

const handleClear = () => {
  childVal.value = "";
};
// v-model
</script>

<style></style>
