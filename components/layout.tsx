import Header from "./nav";
import Footer from "./footer";
import { Box, Flex } from '@chakra-ui/core'


interface Props {
  sm?: boolean;
  children?: any;
}

function Layout({ children, sm }: Props) {
  return (
    <Flex direction='column' >
      <Header />
      <Box mx='auto' p={4} maxH='full' minW={sm ? ['', 600] : ['', 700, 700, 900]} maxWidth={['', '', 1200]} minH='80vh'>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
