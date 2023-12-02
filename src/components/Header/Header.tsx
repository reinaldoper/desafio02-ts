import { Box, Center } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Center>
      <Box bg='tomato' w='100%' display={'flex'} p={4} alignItems={'center'} justifyContent={'center'} color='white'>
        Dio me
      </Box>
    </Center>
  )
}
