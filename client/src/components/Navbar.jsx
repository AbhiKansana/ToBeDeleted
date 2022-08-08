import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authLogout } from '../Redux/auth/actions'
import { useDispatch } from 'react-redux'

const Navbar = () => {

  const auth = useSelector(state=>state.auth)
  const name = auth.userName
  const dispatch = useDispatch()

  function handleLogout(){
    localStorage.removeItem("Node")
    dispatch(authLogout())
  }


  return (
    <Box bg={'#cbf3f0'}  p='20px'>
        <Flex m='auto' w={'400px'} justifyContent='space-between'>
            <Link to='/'><Text>Home</Text></Link>
            <Link to='/login'><Text>Login</Text></Link>
            <Link to='/signup'><Text>Signup</Text></Link>
            <Text cursor={'pointer'} onClick={handleLogout}>Logout</Text>
            {name &&  <Text color={'blue.400'}>Hi {name}</Text>}   
        </Flex>
    </Box>
  )
}

export default Navbar