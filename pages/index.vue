<template>
  <div>
    <h2>我是pages的首页：index page</h2>
    <!-- 组件自动导入 -->
    <BaseFooButton></BaseFooButton>
    <!-- 懒加载 -->
    <LazyMountainList v-if="show"></LazyMountainList>
    <button v-if="!show" @click="show = true">显示列表</button>
    <!-- 代办列表 -->
    <div v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.complate" />
      <strong>{{ todo.title }}</strong>
    </div>
    <div>
      <button @click="count++">+1</button>
      {{ count }}
      <button @click="count--">-1</button>
    </div>
    <nuxt-link to="/detail">detail page</nuxt-link> |
    <nuxt-link to="/user-admin/1">/user-admin/1</nuxt-link> |
    <nuxt-link to="/parent">/parent/children</nuxt-link> |
    <nuxt-link to="/helloworld">helloworld</nuxt-link> |
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
// useAsyncData的使用
// const { data: todos } = await useAsyncData("todos", () => $fetch("/api/todo"));
// useFetch的使用
const { data: todos } = await useFetch("/api/todo", {
  // pick: ["data"], // pick期望的结果是对象 pick的行为就是去掉不用的属性组成的一个新对象
  // 所以这里是 todos:{data:todos}   v-for="todo in todos.data"
  transform(input) {
    return input.data; // 这里是 todos:{todos}   v-for="todo in todos"
  },
});

// 声明SSR友好的状态
const count = userCounter();
</script>
