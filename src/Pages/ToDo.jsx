import { Box, Image, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import Chat from "../Components/Chat";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/LeftNavbar";
import { userContext } from "../Context/Userprovider";

const ToDo = () => {
  const { userDataArr } = useContext(userContext)
  return (
    <Box>
      <Box display={'flex'}>
        <Box w={"24%"}>
          <LeftNavbar />
        </Box>
        <Box py={12} px={8} w={"76%"} >
          <Navbar />
          <hr/>
          {!userDataArr ?
            (<Box><Spinner color='red.500'  size='xl' /></Box>) : (

              <Box mt={4} p={8} className="mt-4 p-8">
                <Box alignItems={'center'} fontWeight={'bold'} fontSize={'5rem'} textColor={'gray.400'} opacity={25} p={40} >
                  Coming Soon
                </Box>
              </Box>)}
        </Box>
      </Box>
      <Chat />
    </Box>
  );
};

export default ToDo;
