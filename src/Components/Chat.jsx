import { useState, useContext } from "react";
import { BsChatRight, BsChevronDown } from "react-icons/bs";
import { Box, Flex, Icon, Text, Image } from "@chakra-ui/react"; 
import { userContext } from "../Context/Userprovider";

const Chat = () => {
  const { users } = useContext(userContext); 
  const [open, setOpen] = useState(false); 

  const handleChat = () => {
    setOpen(!open);
  };

  return (
    <Flex justify="flex-end" pr="2rem"> 
      <Box
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" 
        w="21%" 
        rounded="2px" 
      >
        <Flex
          display={'flex'} fontSize={'xl'} textColor={'white'} bgColor={'#6366f1'} justifyContent={'space-between'} gap={'2rem'} roundedTop={'4px'} cursor='pointer' pt={2} pl={2}
          onClick={handleChat} 
        >
          <Icon as={BsChatRight} mr={8}  /> 
          <Text fontSize={'xl'}>Chats</Text> 
          <Icon as={BsChevronDown} /> 
        </Flex>
        {open ? ( 
          <Box p={4} h={'16rem'} overflow={'auto'} >
            {users?.map((user) => ( 
              <Box key={user.id}>
                <Flex gap="4" pb="[5px]">
                  <Image
                    w={8} h={8} rounded='full'
                    src={user.profilepicture}
                    alt={user.username}
                  />
                  <Text>{user.name}</Text>
                </Flex>
              </Box>
            ))}
          </Box>
        ) : (
          "" 
        )}
      </Box>
    </Flex>
  );
};

export default Chat;
