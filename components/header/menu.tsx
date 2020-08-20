import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/core';
import React from 'react';
import ActiveLink from './../../shared/components/ActiveLink';



const MenuLink = ({ children, to }) => {
  return (
    <ActiveLink href={to}>
      <MenuItem as='a' cursor='pointer'>
        {children}
      </MenuItem>
    </ActiveLink>
  )
};

function MenuItems() {
  return (
    <Menu>

      <MenuButton as={Button} variant='ghost' mr={1} _active={{ outline: 0 }} _focus={{ outline: 0 }} color='gray.600' fontWeight={500}>
        Profile
      </MenuButton>

      <MenuList rounded='lg' shadow='lg'>
        <MenuGroup >
          <MenuLink to='account'>My Account</MenuLink>
          <MenuLink to='team'>Team </MenuLink>
        </MenuGroup>
      </MenuList>

    </Menu>
  )
}

export default MenuItems
