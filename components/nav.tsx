import { Box, Flex, Button, } from "@chakra-ui/react";
import React from "react";
import useAuth from "../shared/hooks/useAuth";
import MenuLink from "../shared/components/MenuLink";
import { buttonProps } from "../shared/utils/form";







const Header = props => {
  const { isAuthenticated } = useAuth()
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show)


  return (
    <Flex as="nav"
      alignItems={["start", "center"]}
      px={10} py={6}
      direction={['column', 'row']}
      color="gray.700"
      {...props}>

      <Box display={['inline', 'none']} mr={3} onClick={handleToggle} color='gray.800' >
        <svg fill="currentColor" width="25px" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </Box>

      <Flex
        flexGrow={1}
        direction={['column', 'row']}
        display={[show ? 'flex' : 'none', 'flex']}
        transition='all .5s linear'
      >
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/dashboard'>Dashboard</MenuLink>
      </Flex>

      {/* <Flex
        alignItems={['start', 'center']}
        direction={['column', 'row']}
        display={[show ? 'flex' : 'none', 'flex']}
      >
        {!isAuthenticated ?
          <>
            <MenuLink to='/signin'>Sign in</MenuLink>
            <MenuLink to='/signup'>
              <Button {...buttonProps}>Create Account
              </Button>
            </MenuLink>
          </>
          :
            <Signout />
        }
      </Flex> */}

    </Flex>
  );
};

export default React.memo(Header)