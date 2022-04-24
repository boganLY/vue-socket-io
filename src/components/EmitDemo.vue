<template lang="">
  <a-input-group compact>
    <a-input v-model:value="val" style="width: calc(100% - 200px)" />
    <a-button @click="submit" type="primary">Submit</a-button>
    <a-button @click="clearVal">clear</a-button>
  </a-input-group>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const val = ref("");
const emits = defineEmits(['']);
//
const submit = () => {
  emits("add", val.value, 2,3);
  val.value = "";
};

const clearVal = () => {
  emits("clear");
};
</script>
