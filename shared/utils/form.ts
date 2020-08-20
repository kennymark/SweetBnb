const inputProps = {
  size: 'lg',
  rounded: 'lg',
  border: '1px',
  color: 'black',
  minWidth: [350],
  borderColor: 'gray.200',
  focusBorderColor: 'gray.900',
  _disabled: {
    bg: 'gray.50',
    cursor: 'not-allowed'
  },
  _hover: { border: '1px', borderColor: 'gray.400' }
} as any

const buttonProps = {
  rounded: 'lg',
  bg: 'black',
  color: 'gray.300',
  _hover: { bg: 'black', shadow: 'lg' },
  _focus: { outline: 0 }
}

function setValidation(name: string, isEmail = false) {
  return {
    minLength: {
      value: 4,
      message: `${name} should be 4 characters or greater`
    },
    maxLength: {
      value: 50,
      message: `${name} can't be greater than 50 characters`
    },
    required: `${name} is required`,
    pattern: isEmail && {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address. Please enter a correct email address"
    }
  }
}

export { inputProps, setValidation, buttonProps }