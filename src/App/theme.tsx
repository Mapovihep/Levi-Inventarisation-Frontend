import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import shadows, { Shadows } from '@mui/material/styles/shadows';
export const defaultTheme = createTheme({
  // typography: {
  //   fontFamily: 'Nunito',
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'Rubik';
              font-weight: 700;
              font-style: normal;
              font-display: swap;
              src: url('/public/fonts/static/Rubik-Bold.ttf');
          }
          @font-face {
              font-family: 'Rubik';
              font-weight: 500;
              font-style: normal;
              src: url('/public/fonts/static/Rubik-Medium.ttf');
          }
          @font-face {
              font-family: 'Rubik';
              font-weight: 400;
              font-style: normal;
              src: url('/public/fonts/static/Rubik-Regular.ttf');
          }
          @font-face {
              font-family: 'Rubik';
              font-weight: 300;
              font-style: normal;
              src: url('/public/fonts/static/Rubik-Light.ttf');
          }
      `,
    },
  },
  palette: {
    primary: {
      main: '#DEDEDE',
      // light: '#959eac',
    },
    secondary: {
      main: '#ECF2FC',
    },
    info: {
      main: '#D0D4DA',
      // light: '#eff2f6',
    },
  },
  shape: {
    borderRadius: 10
  },
  spacing: 5,
  shadows: shadows.map(() => 'none') as Shadows,
})
export const theme = createTheme( defaultTheme, {
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      }
    },
    MuiAutocomplete:{
      styleOverrides:{
        root:{
          '& .MuiFormControl-root':{
            color: 'red',
            '&.MuiOutlinedInput-root':{
              color: 'red',
              '&.MuiOutlinedInput-input':{
                width: '450px'
              }
            }
          },
          outlinedInput:{
            root:{
              width: 250
            }
            
          }
        },

      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          paddingLeft: '30px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            filter: 'drop-shadow(0 0 0.01px #FFFFFF)'
          },
          '&:active': {
            color: 'rgba(255, 255, 255, 0)',
            backgroundColor: 'rgba(255, 255, 255, 0)',
          },
          '&.Mui-selected': {
            '& .MuiListItemText-root': {
              '& .MuiTypography-root': {
                 color:'#5893F9'
              }
            },
            backgroundColor:'#303439',
            '&:hover': {
              backgroundColor: '#303439',
            },
          },
        },
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root:{
          minWidth: '0px',
          alignItems: 'center'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          height: '46px'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        inset: {
          width: '145px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginLeft: '30px',
        },
        middle: {
          borderColor: '#5893F9',
          borderWidth: '3px',
          borderRadius: 5,
          height: '40px',
          margin: 0,
          padding: 0
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          weight: 400,
          fontSize: '14px',
          color:'#535E6C',
          width: '100%'
        },
        head: {
          weight: 600,
          fontSize: '16px',
          color:'#989CA8',
        },
        footer: {
          weight: 400,
          fontSize: '14px',
          color:'#AFB5BF',
        } 
      }
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '16px',
          lineHeight: '21,82px',
          padding: 0,
          color: 'rgba(0, 0, 0, 0.4)',
        },
        body2: {
          fontSize: '16px',
          lineHeight: '21,82px',
          color: 'rgba(0, 0, 0, 0.2)',
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root:{},
        text: {
          width:"30px", 
          height:"30px", 
          padding: 0, 
          margin: 0, 
          backgroundColor: '#F1F3F5', 
          borderRadius: '5px', 
          minWidth: 'auto',
           '&:hover': {
             backgroundColor: '#E9EEF2'
           },
           '&:active': {
            backgroundColor: '#E2E7EC'
           },
           '&:disabled': {
            backgroundColor: '#F1F3F5'
          }
        },
        contained: {
          backgroundColor: defaultTheme.palette.primary.main,
          padding: '10px 25px 10px 25px',
          borderRadius: '5px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#74A7FF'
          },
          '&:active': {
           backgroundColor: '#598CE2'
          },
          '&:disabled': {
           backgroundColor: '#5893F9'
         }
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '190px',
          height: '50px',
          backgroundColor: '#FFFFFF',
          weight: 300,
          fontSize: '14px',
          borderRadius: '5px',
          marginRight: "30px",
          '&.Mui-focused': {
            color: '#535E6C',
            outline: '1px solid #535E6C',
            fieldset: {
            border: 'none',
            },
          },
         
        },
      }
    },
  },
 
});
// export const secondaryTheme = createTheme(defaultTheme, {
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           maxHeight: defaultTheme.spacing(10),
//           padding: defaultTheme.spacing(4, 5),
//           fontWeight: 500,
//           lineHeight: '17px',
//           textTransform: 'none',
//         },
//         contained: {
//           backgroundColor: defaultTheme.palette.info.light,
//           color: defaultTheme.palette.info.main,
//           '&:hover': {
//             backgroundColor: '#e4ecf7'
//           },
//           '&:active': {
//             ackgroundColor: '#dae7f7'
//           },
//           '&:disabled': {
//             opacity: 0.4
//           }
//         },
//       }
//     },
//   }
// })