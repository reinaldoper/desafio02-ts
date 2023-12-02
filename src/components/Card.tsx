import { 
  Center,
  Input,
  Box,
} from '@chakra-ui/react'
import { login } from '../services/login';
import Buton from '../components/Buton';

export const Card = () => {
  return (
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <Buton login={login} />
        </Center>
      </Box>
    </Box>
  )
}