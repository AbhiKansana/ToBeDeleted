import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box  p='20px'>
        <Flex m='auto' w={'400px'} justifyContent='space-between'>
            <Link to='/'><Text>Home</Text></Link>
            <Link to='/login'><Text>Login</Text></Link>
            <Link to='/signup'><Text>Signup</Text></Link>
        </Flex>
    </Box>
  )
}

export default Navbar