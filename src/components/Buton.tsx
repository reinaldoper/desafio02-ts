import React from 'react'
import { 
  Button
} from '@chakra-ui/react'

import eventClick from '../services/TEvent'

const Buton = ({ login }: eventClick) => {

  return (
    <>
      <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        Button
      </Button>
    </>
  )
}

export default Buton
