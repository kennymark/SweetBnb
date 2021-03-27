import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import "../css/index.css";
import store from "../shared/store";
import theme from '../shared/utils/theme';
import 'mapbox-gl/dist/mapbox-gl.css';


function MyApp({ Component, pageProps }) {



  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>

        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  )
}

export default MyApp;
