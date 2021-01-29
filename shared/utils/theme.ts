import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const customTheme = extendTheme({
  config,

});

export default customTheme