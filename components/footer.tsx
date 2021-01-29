import { Box, Text, Flex } from "@chakra-ui/react";


function Footer() {
  return (
    <Flex as='footer' borderTop='1px' borderTopColor='gray.200' justifyContent='center' alignItems='center' height={100}>
      <Box textAlign='center'>Copyright 2020</Box>
    </Flex>
  );
}

export default Footer;
