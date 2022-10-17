export default {
  install(app, options) {
    const person = {
      name: '금나영이',
      age: '13',
      say() {
        alert(this.name);
      },
      ...options,
    };
    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};
