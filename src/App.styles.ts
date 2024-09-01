import { styled } from '@mui/material/styles'

export const AppWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}))
