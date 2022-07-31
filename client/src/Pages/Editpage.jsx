import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { mainUpdateCountries } from "../Redux/EditActions";
import { useDispatch, useSelector } from "react-redux";


export const Editpage = () => {
  const {id} = useParams()

  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector(state=>state.editInfo)
  const success = state.isSuccess


  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [population, setPopulation] = useState(0)

  function handleUpdate(){
     const obj = {city,country,population}
     dispatch(mainUpdateCountries(id,obj))
     navigate('/')
  }

  useEffect(()=>{
    axios.get(`http://localhost:3000/stats/${id}`)
    .then(res=>{
      // console.log(res.data)
      setCity(res.data.city)
      setPopulation(res.data.population)
      setCountry(res.data.country)
    })
    .catch(err=>{
      console.log("edit err",err)
    })
  },[])

  return (
    <Container>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Country</Text>
        <Input value={country} onChange={(e)=>setCountry(e.target.value)} data-cy="capital-city" />
      </Box>
      <Box></Box>
      <Box>
        <Text>City</Text>
        <Input value={city} onChange={(e)=>setCity(e.target.value)} data-cy="capital-city" />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input value={population} onChange={e=>setPopulation(e.target.value)} data-cy="population" />
      </Box>
      <Button mt='8px' onClick={handleUpdate} data-cy="update-button">Update</Button>
     {/* { success && <Text textAlign={'center'}> Edit Successfull</Text>} */}
    </Container>
  );
};

export default Editpage;
