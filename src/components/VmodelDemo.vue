<template lang="">
  <div>
    <a-input-group compact>
      <a-input v-model:value="val" style="width: calc(100% - 200px)" />
      <a-button @click="submit" type="primary">Submit</a-button>
    </a-input-group>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";

const val = ref("");
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(["update:list"]);
const submit = () => {
  const arr = props.list;
  arr.push({ key: new Date().getTime(), value: val.value });
  emits("update:list", arr);
  val.value = "";
};
</script>
