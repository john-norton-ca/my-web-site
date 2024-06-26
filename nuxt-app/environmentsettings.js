const GlobalSettings = {
  development: {
    siteEnvironment: 'Dev',
    telephone: '111 111-1111',
    MSAL_CLIENT_ID: '4f678bbd-da57-43eb-853b-f5d9830ba377',
    MSAL_AUTHORITY:
      'https://nomososo.b2clogin.com/nomososo.onmicrosoft.com/B2C_1_Sign_Up_And_Sign_In',
    MSAL_KNOWN_AUTHORITIES: ['nomososo.b2clogin.com'],
    MSAL_REDIRECT_URI: 'http://localhost:3001/oidc-callback',
  },
  staging: {
    siteEnvironment: 'Test',
    telephone: '222 222-2222',
    MSAL_CLIENT_ID: '4f678bbd-da57-43eb-853b-f5d9830ba377',
    MSAL_AUTHORITY:
      'https://nomososo.b2clogin.com/nomososo.onmicrosoft.com/B2C_1_Sign_Up_And_Sign_In',
    MSAL_KNOWN_AUTHORITIES: ['nomososo.b2clogin.com'],
    MSAL_REDIRECT_URI: 'http://localhost:3001/oidc-callback',
  },
  production: {
    siteEnvironment: '',
    telephone: '333 333-3333',
    MSAL_CLIENT_ID: 'd2107079-5f9e-4f3f-8b38-f87b4dd9ea04',
    MSAL_AUTHORITY:
      'https://nomososo.b2clogin.com/nomososo.onmicrosoft.com/B2C_1_Sign_Up_And_Sign_In',
    MSAL_KNOWN_AUTHORITIES: ['nomososo.b2clogin.com'],
    MSAL_REDIRECT_URI: 'https://about.jbn.technology/oidc-callback',
  },
}

export { GlobalSettings }
