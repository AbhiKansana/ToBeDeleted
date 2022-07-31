import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react";
import React from 'react'
import { useState } from "react";
import axios from "axios";
import { uesNavigate, useNavigate} from 'react-router-dom'
import { mainGetCountriesData } from "../Redux/actions";
import { useDispatch } from "react-redux";



const AddPage = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()

    const[country,setCountry] = useState("")
    const[capital,setCapital] = useState("")
    const[population,setPopulation] = useState("")

    function handleAdd(){
        const city = capital
        const obj = {country,city,population}
        // console.log(obj)
        axios.post("http://localhost:3000/stats",obj)
        .then((res)=>{
               dispatch(mainGetCountriesData())
               nav('/')
               
        })
        .catch(err=>console.log(err))
    }

  return (
    <Container>
        <Heading>Add Country Page</Heading>
        <Box>
        <Text>Country</Text>
        <Input value={country} onChange={e=>setCountry(e.target.value)}  />
      </Box>
      <Box>
        <Text>Capital City</Text>
        <Input value={capital} onChange={(e)=>setCapital(e.target.value)}  />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input type={'number'} value={population} onChange={e=>setPopulation(e.target.value)}  />
      </Box>
      <Button mt='8px' onClick={handleAdd} data-cy="update-button">Add Country</Button>

    </Container>
  )
}

export default AddPage