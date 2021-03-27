import { chakra, Flex, Tag, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

function PropertyCard({ item, onClick }) {

  return (
    <Flex flexDir='column'
      rounded='lg'
      cursor='pointer'
      p={1}
      bgGradient={'linear(to-r, pink.100, blue.50)'}
      zIndex={50}
      onClick={() => onClick(item)}
      transform='rotate(4deg)'
      justifyContent='center' height={350} pos='relative'>

      <chakra.div
        pos='relative'
        bg='white'
        height={350}
        w={'inherit'}
        rounded='xl'
        transform='rotate(-4deg)'
        shadow='2xl'>

        <chakra.img
          height={220}
          borderBottom='1px'
          borderColor='gray.100'
          borderTopRightRadius='lg'
          borderTopLeftRadius='lg'
          w='100%'
          src={item?.xl_picture_url || item?.thumbnail_url}
        />

        <chakra.div p={3} fontSize='sm'>

          <Flex pb={2}>
            <Tag size="sm" colorScheme="red" borderRadius="full" mr={5} >
              <TagLabel>PLUS</TagLabel>
            </Tag>

            <Text fontWeight='bold' color='gray.400' mb={1}>
              {item.beds} BEDS -

            <chakra.span mb={5}>
                {item.bathrooms} BATHS
            </chakra.span>

            </Text>
          </Flex>

          <Text fontWeight='medium' fontSize='md'>{item.name} -   <chakra.span color='pink.300' fontWeight={600}>£{item.price}/day</chakra.span></Text>




        </chakra.div>

      </chakra.div>

    </Flex>

  )
}

export default PropertyCard
