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