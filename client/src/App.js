import { Container, Box } from "@chakra-ui/react";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import axios from "axios";
import { useEffect } from "react";



function App() {

  useEffect(()=> {
    axios.get('http://localhost:3000/stats')
    .then(res=> {
      console.log(res.data)
    })
  },[])

  return (
    <Box>
      <MainRoutes />
    </Box>
  );
}

export default App;
