export const validatePassword: (password: string) => boolean = (password) => {
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasDigit = /[0-9]/.test(password)
  const hasLength = password.length >= 8

  return hasUpperCase && hasLowerCase && hasDigit && hasLength
}
