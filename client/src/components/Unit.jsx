import React from 'react'
import {
    Box,
    Flex,
    Radio,
    RadioGroup,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
  import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { deleteCountryData } from '../Redux/actions';

function Unit({obj}) {
    // console.log(obj)
    const dispatch = useDispatch()
    function handleDelete(){
      dispatch(deleteCountryData(obj._id))
    }
 
  return (
    <div>
        <Box >
            <Flex ml='30px'>
                <Box w='20%'>{obj.country}</Box>
                <Box w='20%'>{obj.city}</Box>
                <Box w='20%'>{obj.population}</Box>
                <Box border='.5px solid green' bg='blue.400'  w='20%'><Link to={`/country/${obj._id}`}><Box ml='30px'  cursor='pointer'  >Edit</Box></Link></Box>
                <Box border='.5px solid green' pl='30px' onClick={handleDelete} cursor='pointer' bg='red.400'  w='20%'>Delete</Box>
            </Flex>

    </Box>
    </div>
  )
}

export default Unit