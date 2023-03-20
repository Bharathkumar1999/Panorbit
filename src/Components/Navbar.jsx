import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from '../Context/Userprovider';


const Navbar = () => {
  const navigate = useNavigate();
  const { users } = useContext(userContext);
  const location = useLocation()
  const [open, setOpen] = useState(false);

  const handleOpenNavbar = () => {
    setOpen(!open);
  };

  const dataArr = JSON.parse(localStorage.getItem("userData"));

  const handleSignOut = () => {
    // remove data from localStorage
    localStorage.removeItem("userData");
    // Navigate to home page
    navigate("/");
  };



  return (
    <div>
      <Box display={'flex'} bgColor={'white'} textColor={'gray.600'} py={4} justifyContent={'space-between'} alignItems='center' >
        <Link to='#' >
          {location.pathname === `/profile/${dataArr.id}` ? "Profile" : ""}
          {location.pathname === `/profile/posts` ? "Posts" : ""}
          {location.pathname === `/profile/gallery` ? "Gallery" : ""}
          {location.pathname === `/profile/todo` ? "ToDo" : ""}
        </Link>

        <Box display={'flex'} alignItems={'center'}>
          <Box mr={4}>
            <Image src={dataArr.profilepicture} alt={dataArr.username} rounded='full' w={8} h={8} />
          </Box>

          <Box >
            <Box position={'relative'} >
              <Button onClick={handleOpenNavbar} display='flex' alignItems={'center'} mr={2} >{dataArr.name}</Button>
                     {/* Dropdown menu */}
            {open ? (
              <Box boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'} position={'absolute'} top={10} right={0} bgColor={'white'} rounded={'lg'} shadow={'md'} p={4} w={'19rem'} z={10}
                
              >
                {/* User information */}
                <Box display={'block'}>
                  <Image
                    src={dataArr.profilepicture}
                    alt={dataArr.username}
                    rounded={'full'} w={16} h={16} m='auto'
                  />
                  <Text fontSize={'xl'} fontWeight={'semibold'} textColor={'gray.700'}  >
                    {dataArr.name}
                  </Text>
                  <Text textColor={'gray.400'}>{dataArr.email}</Text>
                </Box>
                <hr />

                {/* List of other users */}
                {users.slice(0, 3).map((user) => (
                  <Box key={user.id} mt={4}  >
                    <Box display={'flex'} alignItems='center' pb={'5px'} bg={'white'} >
                      <Image
                        src={user.profilepicture}
                        alt={user.username}
                        w={11} h={11} rounded={'full'} mr={2}
                        
                      />
                      <Box textColor={'gray.700'} fontSize={'medium'}>
                        {user.name}
                      </Box>
                    </Box>
                    <hr />
                  </Box>
                ))}

                {/* Sign out button */}
                <Box className="block mt-1">
                  <Button
                    onClick={handleSignOut}
                    bgColor={'blue.500'} textColor='white' fontWeight={'semibold'} py={2} px={4} rounded={'2rem'}
                  >
                    Sign out
                  </Button>
                </Box>
              </Box>
            ) : (
              ""
            )}

              
              
            </Box>
            

          </Box>

        </Box>

      </Box>

    </div>
  )
}

export default Navbar