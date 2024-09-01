export const configureApp = (initTheme: () => void, initProfileData: () => void) => {
  initTheme()
  initProfileData()
  localStorage.setItem('timer', '59')
}
