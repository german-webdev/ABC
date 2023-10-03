if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./dist/sw.js")
    .then((registration) => console.log('ServiceWorker registration successful with scope: ', registration.scope))
    .catch((error) => console.log('Registration failed', error))
}