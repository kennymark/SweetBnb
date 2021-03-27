import { chakra, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function MiniCard({ item }) {

  return (
    <Flex flexDir='column'
      rounded='lg'
      zIndex={50000}
      justifyContent='center'
      shadow='2xl'
    >

      <chakra.img
        height={100}
        borderBottom='1px'
        borderColor='gray.100'
        borderTopRightRadius='lg'
        borderTopLeftRadius='lg'
        w='100%'
        src={item?.xl_picture_url || item?.thumbnail_url}
      />

      <chakra.div p={3} fontSize='sm'>

        <Flex pb={2}>

          <Text fontWeight='bold' color='gray.400' mb={1}>
            {item?.beds} BEDS -

            <chakra.span mb={5}>
              {item?.bathrooms} BATHS
            </chakra.span>

          </Text>
        </Flex>

        <Text fontWeight='medium'>{item?.name}</Text>

        <chakra.span color='pink.300' fontWeight={400}>£{item?.price}/day</chakra.span>


      </chakra.div>



    </Flex>

  )
}

export default MiniCard
