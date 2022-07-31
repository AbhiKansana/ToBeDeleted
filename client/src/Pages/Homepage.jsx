import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { mainGetCountriesData, getCountriesSuccess } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Unit from "../components/Unit";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Homepage = () => {
  const state = useSelector((state) => state.countries);
  const loading = state.isLoading;
  const dispatch = useDispatch();
  // const [url,setUrl] = useSearchParams()
  // const valu = url.get("order")

  const arr = state.countries.map((item) => {
    return <Unit key={item._id} obj={item} />;
  });

  function handleAsc() {
    const arr = state.countries.sort((a, b) => a.population - b.population);
    // console.log("sort asc",arr)
    // setUrl({order:"asc"})
    dispatch(getCountriesSuccess(arr));
  }

  function handleDesc() {
    const arr = state.countries.sort((a, b) => b.population - a.population);
    dispatch(getCountriesSuccess(arr));
    // setUrl({order:"desc"})
  }

  useEffect(() => {
    dispatch(mainGetCountriesData());
  }, []);

  return (
    <>
      <Box m='auto' maxWidth={'1200px'} position={"relative"}>
        <Flex justifyContent={'center'} padding="0 1rem" mb="2rem">
          <Text fontWeight="700" paddingRight="1rem">
            Sort by country population
          </Text>
          <RadioGroup>
            <Stack direction="row">
              <Radio onClick={handleAsc} data-cy="asc" value="asc">
                Ascending
              </Radio>
              <Radio onClick={handleDesc} data-cy="desc" value="desc">
                Descending
              </Radio>
            </Stack>
          </RadioGroup>
          <Button ml="28px">
            <Link to="add">Add Country</Link>
          </Button>
        </Flex>
        {loading === false && <Box h="50px"></Box>}
        {loading === true ? (
          <Center position={"fixed"} top="40%" left="50%" h="50px">
            <Text>Loading...</Text>
          </Center>
        ) : (
          <Box>
            <TableContainer  >
              <Table  colorScheme='teal'  variant="simple">
                <Thead>
                  <Tr >
                    <Th w="20%">Country</Th>
                    <Th w="20%"> Capital</Th>
                    <Th w="20%">Population</Th>
                    <Th w="20%">Edit</Th>
                    <Th w="20%">Delete</Th>
                  </Tr>
                </Thead>
                <Tbody  data-cy="table-body">
                  {/* map through the fetched country list, to form table rows */}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {arr}
      </Box>
    </>
  );
};

export default Homepage;
