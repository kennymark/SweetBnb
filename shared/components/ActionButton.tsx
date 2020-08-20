import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/core'

interface Props {
  children?: any;
  props?: ButtonProps;
  onClick?: any;
}

export const buttonProps = {
  color: 'gray.200',
  _hover: { bg: 'gray.700' },
  _active: { bg: 'gray.600' },
  _focus: { outline: 0 },
  variant: 'solid',
  bg: 'gray.900'
}


function ActionButton({ children, ...props }: Props) {
  return (
    <Button type='submit' width='100%' height={55} mt={5} {...props} {...buttonProps}>
      {children}
    </Button>
  )
}

export default ActionButton
