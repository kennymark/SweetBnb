import { CSSReset, ChakraProvider, Progress } from '@chakra-ui/core';
import { StoreProvider } from 'easy-peasy';
import "../css/index.css";
import store from "../shared/store";
import theme from '../shared/utils/theme'
import { useIsFetching } from 'react-query';
import { useEffect, useState } from 'react';



function MyApp({ Component, pageProps }) {
  const isFetching = useIsFetching()
  const [showFetch, setShowFetch] = useState(true)

  useEffect(() => {
    isFetching ? setShowFetch(true) : setShowFetch(false)
  }, [isFetching])

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <StoreProvider store={store}>
        {showFetch && <Progress size="lg" value={100} width='100%' isAnimated position='fixed' top={0} colorScheme='green' />}
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  )
}

export default MyApp;
