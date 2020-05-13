export default {
  countLater(context, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(payload);
        context.commit("countLater", payload);
        resolve();
      }, 1000);
    });
  },
};