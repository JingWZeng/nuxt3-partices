<template>
  <NuxtLayout name="custom">
    <template #title>
      <h3>helloworld title</h3>
    </template>
    <template #default>
      <h3>content...</h3>
    </template>
  </NuxtLayout>
</template>

<script>
// 使用自定义布局页
// export default { layout: "custom" };

// 使用完全控制页面
export default {
  layout: false,
};
</script>

<script setup></script>
