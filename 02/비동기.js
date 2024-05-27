function timeOut(callback) {
  setTimeout(() => {
    console.log("say speak");
    callback();
  }, 2000);
}

timeOut(() => {
  console.log("say talk");
});
