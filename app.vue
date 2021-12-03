<template>
  <div>
    <h3>hello nuxt3</h3>
    <d-button>我是vueui的按钮</d-button>
    <!-- 路由出口 -->
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts" setup>
const { $hello } = useNuxtApp();
console.log($hello());
</script>
