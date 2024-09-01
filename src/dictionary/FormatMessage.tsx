import ruLocale from './ru'

const FormatMessage = (id: string) => {
  if (ruLocale[id]) return ruLocale[id]
  else return '???'
}

export default FormatMessage
