const GlobalSettings = {
  development: {
    siteEnvironment: 'Dev',
    telephone: '111 111-1111',
    MSAL_CLIENT_ID: '4f678bbd-da57-43eb-853b-f5d9830ba377',
    MSAL_AUTHORITY:
      'https://nomososo.b2clogin.com/nomososo.onmicrosoft.com/B2C_1_Sign_Up_And_Sign_In',
    MSAL_KNOWN_AUTHORITIES: ['nomososo.b2clogin.com'],
  },
  staging: {
    siteEnvironment: 'Test',
    telephone: '222 222-2222',
    MSAL_CLIENT_ID: '4f678bbd-da57-43eb-853b-f5d9830ba377',
    MSAL_AUTHORITY:
      'https://nomososo.b2clogin.com/nomososo.onmicrosoft.com/B2C_1_Sign_Up_And_Sign_In',
    MSAL_KNOWN_AUTHORITIES: ['nomososo.b2clogin.com'],
  },
  production: {
    siteEnvironment: '',
    telephone: '333 333-3333',
    MSAL_CLIENT_ID: '4f678bbd-da57-43eb-853b-f5d9830ba377',
    MSAL_AUTHORITY:
      'https://nomososo.b2clogin.com/nomososo.onmicrosoft.com/B2C_1_Sign_Up_And_Sign_In',
    MSAL_KNOWN_AUTHORITIES: ['nomososo.b2clogin.com'],
  },
}

export { GlobalSettings }
