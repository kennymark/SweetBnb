import { extendTheme } from "@chakra-ui/react"


const customeTheme = extendTheme({
  colors: {
    accent: '#ffedc5',
    selected: '#38a169',
    darkMode: '#111216',
    focusBorderColor: 'black'
  },
  fonts: {
    // body: "Poppins, sans-serif",
    // heading: "IBM Plex Sans, sans-serif",
    // monospace: "Source Code Pro, monospace",
  },
  fontSizes: {

  },

  components: {

    Link: {
      baseStyle: {
        textDecoration: 'none',
      },
    },
    FormLabel: {
      baseStyle: {
        color: 'gray.600'
      }
    },
    Input: {
      baseStyle: {
        borderRadius: 'lg',
        color: 'black',
        minWidth: [350],
        _focus: { borderColor: 'green.900' },
      },

      defaultProps: {
        size: 'lg',
        variant: 'outline',
      },
      variants: {
        outline: {
          field: {
            borderColor: 'gray.200',
            border: '1px',
            _disabled: {
              bg: 'gray.50',
              cursor: 'not-allowed'
            },
            _focus: { borderColor: 'green.900' },
            _hover: { border: '1px', borderColor: 'gray.400' }
          }
        }
      }
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    "*": {
      outline: 'none'
    },
    global: props => ({
      a: {
        textDecoration: 'none'
      },
      pre: { fontFamily: 'monospace' },
      body: {
        bg: props.colorMode === 'light' ? 'white' : 'darkMode',
      },
    }),
  }
})

export default customeTheme