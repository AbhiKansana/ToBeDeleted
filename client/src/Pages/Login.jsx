import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import {Link as Link1} from 'react-router-dom'
import axios from 'axios'
import { authLogin } from '../Redux/auth/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

  
  export default function LoginCard() {

    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")

    const dispatch = useDispatch()
    const nav = useNavigate()

    function handleClick(){
      const obj = {password,email}
      if(email && password){

        axios.post('http://localhost:3000/user/login',obj)
        .then(res=>{        
          dispatch(authLogin(res.data))
          localStorage.setItem("Node",JSON.stringify(res.data))
          alert("Login Successfull")
          nav('/')
        })
        .catch(err=>{
          alert("wrong credentials")
        })
      }
      else{
        alert("wrong credintials")
      }

    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Don't have a account? <Link1 to='/signup'><span style={{color:"blue"}}>Singup</span></Link1> 
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }