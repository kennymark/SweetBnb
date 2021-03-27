
import { Container } from '@chakra-ui/react';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';
import results from '../airbnb-listings.json';
import Header from './header';


interface Props {
  sm?: boolean;
  children?: any;
}

function Layout({ children }: Props) {
  const setProperties = useStoreActions<any, any>(state => state.properties.setProperties)

  useEffect(() => {
    setProperties(results.slice(1, 28))
  }, [])


  return (
    <>
      <Header />
      <Container maxW='8xl' p={4} pb={20} bg='pink.50' >

        {children}

      </Container>
      {/* <Footer /> */}
    </>
  );
}
export default Layout;
