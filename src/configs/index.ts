export const configs = {
    apis: {
      cep: process.env.REACT_APP_CEP_URL,
      economia: process.env.REACT_APP_ECONOMIA_URL,
      github: process.env.REACT_APP_GITHUB_URL,
      starWars: 'https://star-wars-api-unifacef.herokuapp.com' ,
    },
    sentry: process.env.REACT_APP_SENTRY_DSN || "https://38d765a4180b4c46b90101e7dcb30c47@o1196582.ingest.sentry.io/6319612",
  }
  export default configs;

