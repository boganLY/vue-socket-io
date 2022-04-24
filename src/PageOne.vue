<template>
  <div>
    <test-page />
    <!-- <test-page v-bind:key="item.key" v-for="item in data" v-bind:todo="item" /> -->
  </div>
</template>
<script>
export default {
  data() {
    const arr = [];
    for (let index = 0; index < 10; index++) {
      arr.push({ key: index, name: `tom${index}` });
    }
    return {
      data: arr,
    };
  },
};
</script>
<style lang=""></style>
