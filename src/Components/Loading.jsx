import { Spinner } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <Spinner color='red.500'  size='xl' />
    </div>
  )
}

export default Loading