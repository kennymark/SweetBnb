//@ts-nocheck
import { Button, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import * as React from 'react';
import ReactMapGL, { FlyToInterpolator, Marker, NavigationControl } from 'react-map-gl';
import MiniCard from '../shared/components/MiniCard';
import Pin from './pin';



function Map() {

  const viewPort = useStoreState(state => state.map.viewPort)
  const setViewport = useStoreActions<any, any>(state => state.map.setViewPort)
  const properties = useStoreState(state => state.properties.all)
  const selected = useStoreState(state => state.properties.selected)
  const setSelected = useStoreActions<any, any>(state => state.properties.setSelected)


  const token = 'pk.eyJ1Ijoia2VubnltYXJrIiwiYSI6ImNrbXA2anA5bDJiOXAydnFrb3R4cHBhMTYifQ.FmJWVvT7NAWihXSw1sklIQ'

  return (
    <ReactMapGL {...viewPort} width='100%' height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={token}
      style={{ borderRadius: 20 }}
      transitionDuration={1000}
      transitionInterpolator={new FlyToInterpolator()}
      mapStyle='mapbox://styles/mapbox/streets-v11'
    >

      {properties?.map(property =>

        <Marker key={property.fields.id}
          latitude={Number(property.fields.latitude)}
          longitude={Number(property.fields.longitude)}>


          <MiniProp item={selected} onClick={() => setSelected(property.fields)}>
            <Pin color={selected.id === property.fields.id ? 'pink.300' : 'blue.300'} transform={selected.id === property.fields.id ? 'scale(1.3)' : 'scale(1.0)'} />
          </MiniProp>



        </Marker>
      )}

      <NavigationControl style={{ top: 10, right: 10 }} />

    </ReactMapGL>
  );
}


export default Map

function MiniProp({ children, item, onClick = null }) {
  return (
    <>
      <Popover placement='top'>
        <PopoverTrigger >
          <Button variant='ghost' _active={{}} _focus={{ outline: 0, bg: 'none' }} _hover={{}} onClick={onClick}>
            {children}
          </Button>
        </PopoverTrigger>

        <PopoverContent w={200} _focus={{ outline: 0 }} zIndex={100}>
          <MiniCard item={item} />
        </PopoverContent>
      </Popover>
    </>
  )
}