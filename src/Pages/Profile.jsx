import { Box, Divider, Image, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'; 
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import axios from 'axios';
import Chat from '../Components/Chat';

const Profile = () => {
  const { userId } = useParams(); 
  const [user, setUser]= useState(null);

  useEffect(() => { 
    const getUser = async () => { 
      const res = await axios.get(`https://json-mock-gxsh.onrender.com/data/${userId}`); 
      setUser(res.data); 
    };
    getUser(); 
  }, [userId]); 

  localStorage.setItem("userData", JSON.stringify(user))  
  
  const userDataArr = JSON.parse(localStorage.getItem("userData")) 

  if (!userDataArr) { 
    return <div>
      <Spinner color='red.500'  size='xl' />

      </div>;
  }


  return (
    <div>
      <Box display={"flex"}>
        <Box w="24%">
          <LeftNavbar/>

        </Box>
        {userDataArr && (
          <Box py={12} px={8} w="76%">
            <Navbar/>
            <hr />
            <Box display={"flex"} flexWrap={'-moz-initial'}  mt={4} p={8}>
              <Box p={4} w="100%">
                <Box>
                  <Image src={userDataArr.profilepicture} alt={userDataArr.username}  w={52} h={52} rounded={"full"} m={'auto'}/>
                  <Text fontSize="xl" textColor={"gray.700"} pt={2} >{userDataArr.name}</Text>
                </Box>

                <Box lineHeight={'3rem'}>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'} >
                    Username: <b>{userDataArr?.username}</b> 
                  </Text>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'left'}>
                    E-mail: <b>{userDataArr?.email}</b>  
                    </Text>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'left'}>
                    Phone: <b>{userDataArr?.phone}</b> 
                    </Text>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'left'}>
                    Website: <b>{userDataArr?.website}</b> 
                    </Text>
                </Box>
                <hr />

                <Box lineHeight={'3rem'}>
                  <Text justifyContent={"space-between"} fontSize="xl" textColor={"gray.700"}  textAlign={'center'}>Company</Text>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'} >Name: <b>{userDataArr?.company.name}</b> </Text>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'} >catchphrase: <b>{userDataArr?.company.catchPhrase}</b> </Text>
                  <Text display={"flex"} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'} >bs: <b>{userDataArr?.company.bs}</b></Text>

                </Box>


              </Box>
              <Divider orientation='vertical' color={'grey'} border={"gray"} h={'auto'} />

              <Box w='100%'>
                <Box w="100%" lineHeight={'3rem'}>
                  <Text fontSize="xl" textColor={"gray.700"}  textAlign={'left'}>Address:</Text>
                  <Text  display={'flex'} pl={8}  justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'}>Street: <b> {userDataArr?.address.street}</b></Text>
                  <Text  display={'flex'} pl={8} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'}>Suite: <b>{userDataArr?.address.suite}</b></Text>
                  <Text  display={'flex'} pl={8} justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'}>City: <b>{userDataArr?.address.city}</b></Text>
                  <Text  display={'flex'} pl={8}justifyContent={"space-between"} fontSize="medium" textColor={"gray.700"} fontWeight={"semibold"} textAlign={'center'}>Zipcode: <b>{userDataArr?.address.zipcode}</b></Text>
                </Box>
                <hr />
                <Box pt={4} pl={8}>
                  <Image  rounded={'xl'} src="https://static.toiimg.com/thumb/msid-79949586,imgsize-128601,width-400,resizemode-4/79949586.jpg" alt="map" />
                  <Box display={'flex'} gap={4} justifyContent={'space-evenly'}>
                    <Text display={"flex"} justifyContent={'space-around'}  fontSize="medium" textColor={"gray.700"} >Lat: <b> {userDataArr?.address.geo.lat}</b> </Text>
                    <Text display={"flex"} justifyContent={'space-around'}  fontSize="medium" textColor={"gray.700"}>Lng: <b>{userDataArr?.address.geo.lng}</b> </Text>
                  </Box>

                </Box>

              </Box>


            </Box>

          </Box>
        )}

      </Box>
      <Chat/>

    </div>
  )
}

export default Profile