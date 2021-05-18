export const parameters = {
  iframe: {
    url: 'https://farmerless.com/scripts',
    timeout: 1000,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const loaders = [
//   async () => ({
//     currentUser: (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
//   }),
// ];