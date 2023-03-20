import React, { useContext} from 'react'
import { userContext } from '../Context/Userprovider'
import bg from "../assests/bg.png"
import { Link } from "react-router-dom";
import { Box, Image, Text } from '@chakra-ui/react'
import Loading from '../Components/Loading';

const LandingPage = () => {
  const { users, loading } = useContext(userContext);
   
  return (
     <Box py={28}
        
        style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            
        }}
    >

         <Box border={2} w="38%" m="auto" rounded={"3rem"}
               boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"

         >
           <Box bgColor={"gray.100"} roundedTop="2.8rem">
             <Text fontSize="xl" p={8} textColor={"teal"} fontWeight={"semibold"} textAlign={"center"} >Select User Account</Text>

           </Box>

           {loading ? <Loading/> :
         (
           <Box bgColor={"white"} roundedBottom="2.8rem">
             <Box p={8} overflowY="auto" h="28rem" >
               {users.length >0 &&
               users.map((user)=>(
                 <Box key={user.id} mb={4} listStyleType="none" >
                  <Box display={"block"} >
                  <Link to={`/profile/${user.id}`} >
                       <Box display={"flex"} alignItems="center" pb={4} bg={"white"}>
                         <Image src={user.profilepicture} alt={user.username} w={35} h={35} rounded={"full"} mr={2} />
                         <Box fontSize={"medium"} >{user.name}</Box>
                       </Box>
                      <hr/>
                    </Link>

                  </Box>
      
                 </Box>
                                          
              ))}

              </Box>

            </Box>
        )
        }

         </Box>

    </Box>

  );
};


export default LandingPage




