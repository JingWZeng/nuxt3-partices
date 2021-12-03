import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  return {
    provide: {
      hello: () => "world",
    },
  };
});
