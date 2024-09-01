import { createTheme } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'

function mainThemeBase(isDarkTheme?: boolean): Theme {
  return createTheme({
    palette: {
      primary: {
        main: isDarkTheme ? '#252525' : '#FFFFFF',
        light: '#EBE3FF',
        dark: '#9063FF',
      },
      secondary: {
        main: '#333333',
      },
      error: {
        main: '#E85353',
      },
      text: {
        primary: isDarkTheme ? '#FAFAFA' : '#232323',
        secondary: '#000000',
        disabled: '#797979',
      },
      grey: {
        '50': '#FAFAFA',
        '100': '#f6f6f6',
        '200': '#ececec',
        '300': isDarkTheme ? '#757575' : '#e2e2e2',
        '400': '#d7d7d7',
        '500': '#c6c6c6',
        '600': '#747474',
        '700': '#606060',
        //disabled
        '800': isDarkTheme ? '#424242' : '#c6c6c6',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    components: {},
  })
}

export function mainTheme(isDarkTheme?: boolean): Theme {
  return createTheme({
    ...mainThemeBase(isDarkTheme),
    components: {
      MuiTypography: {
        styleOverrides: {
          body1: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //18px
            fontSize: '2.13vh',
            fontStyle: 'normal',
            fontWeight: 700,
            //24px
            lineHeight: '2.84vh',
          },
          body2: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //16px
            fontSize: '1.9vh',
            fontStyle: 'normal',
            fontWeight: 400,
            //24px
            lineHeight: '2.84vh',
          },
          h1: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //32px
            fontSize: '3.8vh',
            fontStyle: 'normal',
            fontWeight: 700,
            //40px
            lineHeight: '4.74vh',
          },
          h2: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //14px
            fontSize: '1.66vh',
            fontStyle: 'normal',
            fontWeight: 400,
            //24px
            lineHeight: '2.84vh',
          },
          h3: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //24px
            fontSize: '2.84vh',
            fontStyle: 'normal',
            fontWeight: 700,
            //32px
            lineHeight: '3.8vh',
          },
          h4: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //20px
            fontSize: '2.34vh',
            fontStyle: 'normal',
            fontWeight: 700,
            //32px
            lineHeight: '3.8vh',
          },
          subtitle1: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //12px
            fontSize: '1.42vh',
            fontStyle: 'normal',
            fontWeight: 400,
            //16px
            lineHeight: '1.9vh',
          },
          subtitle2: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //12px
            fontSize: '1.42vh',
            fontStyle: 'normal',
            fontWeight: 400,
            //24px
            lineHeight: '2.84vh',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: '1.42vh',
            height: '6.4vh',
            fontSize: '1.9vh',
            lineHeight: '2.84vh',
            boxShadow: 'none',
            boxSizing: 'border-box',
            touchAction: 'none',
            border: `1px solid ${mainThemeBase(isDarkTheme).palette.grey[300]}`,
            '& input': {
              padding: 0,
              paddingTop: '2.34vh',
              paddingLeft: '1.9vh',
            },
            '& fieldset': {
              border: 'none',
            },
            '& label': {
              color: mainThemeBase(isDarkTheme).palette.text.primary,
              opacity: '1',
              top: '1.9vh',
              left: '0',
              transform: 'translate(1.9vh, 0) scale(1)',
              '&.Mui-focused': {
                color: isDarkTheme ? '#757575' : '#757575',
                transform: 'translate(1.9vh, -1.4vh) scale(0.75)',
              },
              '&.MuiFormLabel-filled': {
                color: isDarkTheme ? '#757575' : '#757575',
                transform: 'translate(1.9vh, -1.4vh) scale(0.75)',
              },
              '&.Mui-error': {
                color: mainThemeBase(isDarkTheme).palette.text.primary,
              },
            },
            '&:hover': {
              border: `1px solid ${mainThemeBase(isDarkTheme).palette.primary.dark}`,
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableTouchRipple: true,
          disableElevation: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            transition: 'color 0.05s ease-in-out 0s, background-color 0.5s ease-in-out 0s',
            textTransform: 'none',
            height: '5.45vh',
            width: '100%',
            padding: '1.42vh',
            borderRadius: '1.42vh',
            fontSize: '1.9vh',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '2.84vh',
            '> svg': {
              fill: mainThemeBase(isDarkTheme).palette.text.primary,
              '> path': {
                fill: mainThemeBase(isDarkTheme).palette.text.primary,
                stroke: mainThemeBase(isDarkTheme).palette.text.primary,
              },
            },
          },
          contained: {
            boxShadow: 'none',
            background: mainThemeBase(isDarkTheme).palette.primary.dark,
            color: mainThemeBase(true).palette.text.primary,
            '&:hover': {
              boxShadow: 'none',
              background: mainThemeBase(isDarkTheme).palette.primary.dark,
            },
          },
          outlined: {
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            border: `1px solid ${mainThemeBase(isDarkTheme).palette.grey[300]}`,
            '&:hover': {
              borderColor: mainThemeBase(isDarkTheme).palette.grey[300],
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paperWidthSm: {
            boxSizing: 'border-box',
            padding: '2.84vh 4.1vw',
            width: '91.8vw',
            margin: 0,
            maxWidth: 'unset',
            borderRadius: '1.42vh',
            backgroundColor: mainThemeBase(isDarkTheme).palette.primary.main,
          },
          paperWidthMd: {
            marginTop: '65vh !important',
            boxSizing: 'border-box',
            padding: '2.84vh 4.1vw',
            width: '91.8vw',
            margin: 0,
            maxWidth: 'unset',
            borderRadius: '1.42vh',
            backgroundColor: mainThemeBase(isDarkTheme).palette.primary.main,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            margin: 0,
            padding: 0,
            textAlign: 'center',
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //18px
            fontSize: '2.13vh',
            fontStyle: 'normal',
            fontWeight: 700,
            //24px
            lineHeight: '2.84vh',
            marginBottom: '1.66vh',
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            margin: 0,
            textAlign: 'center',
            color: mainThemeBase(isDarkTheme).palette.text.primary,
            //14px
            fontSize: '1.66vh',
            fontStyle: 'normal',
            fontWeight: 400,
            //24px
            lineHeight: '2.84vh',
            padding: '0',
            marginBottom: '1.66vh',
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '0',
          },
        },
      },
      MuiRating: {
        styleOverrides: {
          root: {
            fontSize: '1.9vh',
            color: mainThemeBase(isDarkTheme).palette.primary.dark,
          },
          icon: {
            color: mainThemeBase(isDarkTheme).palette.primary.dark,
            opacity: 1,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: 'unset',
            boxShadow: 'unset',
            '> ul': {
              padding: 0,
              width: '4.27vh',
              height: '4.27vh',
              overflow: 'hidden',
            },
          },
        },
      },
      MuiFormGroup: {
        styleOverrides: {
          root: {
            maxHeight: '43.84vh',
            display: 'flex',
            flexFlow: 'column',
            overflowY: 'auto',
            overflowX: 'hidden',
            width: '90%',
            '> *': {
              marginTop: '0.71vh',
            },
            '&::-webkit-scrollbar': {
              width: '2.05vw',
            },
            '&::-webkit-scrollbar-track': {
              background: mainThemeBase(isDarkTheme).palette.grey[300],
              borderRadius: '1.025vw',
            },
            '&::-webkit-scrollbar-thumb': {
              background: mainThemeBase(isDarkTheme).palette.grey[300],
              borderRadius: '1.025vw',
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            padding: 0,
            marginRight: '2.05vw',
            color: mainThemeBase(isDarkTheme).palette.primary.dark,
            '&.Mui-checked': {
              color: mainThemeBase(isDarkTheme).palette.primary.dark,
            },
            '& .MuiSvgIcon-root': {
              fontSize: '2.84vh',
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            width: '100%',
            borderRadius: '1.42vh',
          },
          indicator: {
            height: '0px',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            width: '33.3%',
            borderRadius: '1.42vh',
            //14px
            fontSize: '1.66vh',
            fontStyle: 'normal',
            fontWeight: 400,
            //24px
            lineHeight: '2.84vh',
            '&.Mui-selected': {
              width: '33.3%',
              borderRadius: '1.42vh',
              background: mainThemeBase(isDarkTheme).palette.primary.dark,
            },
            transition: 'color 0.01s ease-in-out 0s, background-color 0.075s ease-in-out 0s',
          },
        },
      },
    },
  })
}
