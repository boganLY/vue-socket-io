<template lang="">
  <div>
    <a-input-group compact>
      <a-input v-model:value="val" style="width: calc(100% - 200px)" />
      <a-button @click="send" type="primary">send</a-button>
    </a-input-group>
  </div>
</template>
<script setup>
import io from "socket.io-client";
import { ref } from "vue";


const val = ref("");

const log = console.log;
const socket = io("ws://127.0.0.1:7001/", {
  // 实际使用中可以在这里传递参数
  query: {
    room: "example",
    userId: `client_${Math.random()}`,
  },

  transports: ["websocket"],
});

socket.on("connect", () => {
  log("?????")
  // const id = socket.id;
  // log("#connect,", id, socket);

  // // 监听自身 id 以实现 p2p 通讯
  // socket.on(id, (msg) => {
  //   log("#receive,", msg);
  // });
});

// 接收在线用户信息
socket.on("online", (msg) => {
  log("#online,", msg);
});

// 系统事件
socket.on("disconnect", (msg) => {
  log("#disconnect", msg);
});

socket.on("disconnecting", () => {
  log("#disconnecting");
});

socket.on("error", () => {
  log("#error");
});


const send = () => {
  socket.emit('server', {
      name: 'U.amazing',
      msg: val.value
  })
}
</script>
<style lang=""></style>
