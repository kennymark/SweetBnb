import React from 'react'
import ActiveLink from './ActiveLink'

const MenuLink = ({ children, to, }) => (
  <ActiveLink href={to} activeClassName='selected'>
    <a style={{ marginRight: 15, }} color='gray.600' >   {children}
    </a>
  </ActiveLink>
)



export default MenuLink
