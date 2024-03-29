export const signIn = async () => {
  const { $msal } = useNuxtApp()
  console.log($msal)

  const loginRequest = {
    scopes: ['openid', 'profile'],
  }
  try {
    await $msal.loginRedirect(loginRequest)
  } catch (error) {
    console.error('Error during login:', error)
  }
}
