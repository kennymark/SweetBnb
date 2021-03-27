import { Grid, GridItem, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Map from '../components/map';
import SEO from "../components/seo";
import PropertyCard from '../shared/components/PropertyCard';

function IndexPage() {

  const properties = useStoreState(state => state.properties.all)
  // const setProperties = useStoreActions<any, any>(state => state.properties.setProperties)
  const setViewport = useStoreActions<any, any>(state => state.map.setViewPort)
  const setSelected = useStoreActions<any, any>(state => state.properties.setSelected)

  const allFlats = useState(properties)

  const setCurrentItem = (item) => {
    setSelected(item)
    setViewport({
      longitude: Number(item.longitude),
      latitude: Number(item.latitude),
      zoom: 15
    })
  }

  useEffect(() => {

    return () => {

    }
  }, [setSelected])

  const filterProperties = ({ target: { value } }) => {
    const filteredFlats = allFlats.filter((flat) => {
      return flat?.fields?.name.toLowerCase().includes(value.toLowerCase());
    })

    // setProperties(filteredFlats)
  }

  return (
    <>
      <SEO title='Find homes in London' />

      <Layout>

        <Heading
          bgClip="text"
          mt={{ base: 10, md: 90 }}
          bgGradient='linear(to-r, pink.400, blue.700)'>
          Stay in London
        </Heading>

        <Text color='gray.500'>
          Find beautiful homes and apartments in the beautiful city of London
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>

          <GridItem colSpan={{ base: 5, lg: 3 }}   >

            <Input size='xl'
              borderColor='pink.100'
              focusBorderColor='cyan.200'
              placeholder='Search...'
              my={8}
              bg='white'
              shadow='sm'
              rounded='xl'
              p={4}
              _hover={{ border: '1px', 'borderColor': 'gray.100', }}
              _focus={{ border: '1px', borderColor: 'pink.200', shadow: 'md' }}
              onChange={filterProperties}
            />

            <SimpleGrid columns={{ base: 0, lg: 3 }} gap={10}>
              {properties?.map(item => <PropertyCard item={item.fields} key={item.fields.id} onClick={setCurrentItem} />)}
            </SimpleGrid>

          </GridItem>

          <GridItem colSpan={{ base: 3, lg: 2 }} display={{ base: 'none', md: 'flex' }} rounded='lg' position='fixed' top={79} height='100vh' width={{ lg: 650 }} right={0} bottom={0}>
            <Map />
          </GridItem>

        </Grid>

      </Layout>




    </>
  );
}

export default IndexPage;
