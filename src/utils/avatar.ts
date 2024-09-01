import avatar1 from '..//assets/avatars/avatar1.svg'
import avatar2 from '..//assets/avatars/avatar2.svg'

interface IAvatarEnum {
  [key: number]: string
}

export const AvatarEnum: IAvatarEnum = {
  1: avatar1,
  2: avatar2,
  3: avatar1,
  4: avatar1,
  5: avatar1,
  6: avatar1,
  7: avatar1,
  8: avatar1,
  9: avatar1,
  10: avatar1,
}

export const getAvatarSVG = (avatarNumber: number) => {
  return AvatarEnum[avatarNumber]
}
