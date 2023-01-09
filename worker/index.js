self.addEventListener("fetch", (event) => {
  if (navigator.onLine) {
    console.log("You currently online!");
  } else {
    console.log("Your are Offline now!");
  }
});
