const todos = [
  { id: 1, title: "nuxt3", completed: false, foo: "bar" },
  { id: 2, title: "vue3", completed: true, foo: "bar" },
];

export default () => {
  return {
    code: 1,
    data: todos,
  };
};
