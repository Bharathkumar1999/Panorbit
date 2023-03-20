import { Box } from '@chakra-ui/react';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const LeftNavbar = () => {
  const activeLink = useLocation();

  const dataArr = JSON.parse(localStorage.getItem("userData"));

  


  return (
    <div>
      <Box p={8}>
        <Box bgGradient={'bold'} p={8} h={"45rem"} rounded="3xl" backgroundColor='#6366f1' >
          <Box textAlign={'left'} py={44} fontWeight={'semibold'} lineHeight="4rem" >
            
              <Box gap={10} >
              <Link
                to={`/profile/${dataArr.id}`}
                
              >
                Profile
              </Link>
              </Box>
              <hr />
              <Box>
              <Link
                to="/profile/posts"
            
              >
                Posts
              </Link>
              </Box>
              <hr />
              <Box>
              <Link
                to="/profile/gallery"
                
              >
                Gallery
              </Link>

              </Box>
              <hr />
              <Box>
              <Link
                to="/profile/todo"
                
              >
                ToDo
              </Link>
              </Box>
              <hr />
             
            

          </Box>

        </Box>

      </Box>
    </div>
  )
}

export default LeftNavbar