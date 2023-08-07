import React from 'react'
import { Box, Container, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
// import {useNavigate} from 'react-router-dom';



const Homepage = () => {
  const history = useHistory()
  // const navigate = useNavigate()

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))

        if(userInfo){
            history.push('/chats')
            // navigate('/chats')
        }
    }, [history])

  return (
    <Container maxW='xl' centerContent>
      <Box d="flex" justifyContent="center" p={3} bg={"white"} w="100%" m="40px 0 15px 0 " borderRadius="lg" borderWidth="1px" color={"black"}>
        <Text fontSize="4xl" fontFamily="Work sans" > Chat App </Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
          <TabList mb="1em">
            <Tab width="50%">Log In</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <Signup></Signup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  )
}

export default Homepage
