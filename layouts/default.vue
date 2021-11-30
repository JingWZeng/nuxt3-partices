<template>
  <div>
    <!-- <the-header />不生效 -->
    <TheHeader></TheHeader>
    通用布局页,default.vue
    <slot></slot>

    <TheBody></TheBody>
    <TheFooter></TheFooter>
  </div>
</template>
