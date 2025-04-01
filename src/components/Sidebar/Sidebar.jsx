import { Box, Flex, Link, Button } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'
import {BiLogOut} from 'react-icons/bi'
import { Tooltip } from "@/components/ui/tooltip"
import useLogout from '../../hooks/useLogout'
import SidebarItems from './SidebarItems'

const Sidebar = () => {

  const {handleLogout, isLoggingOut} = useLogout();

  return (
    <Box 
      height={"100vh"}
      borderRight={"1px solid "}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{base:2, md:4}}
      position={"sticky"}
      top={0}
      left={0}
    >
        
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        {/* Instagram logo for desktop  */}
        <Link to={"/"} as={RouterLink} 
          pl={2} 
          display={{base:"none", md: "block"}} 
          cursor={"pointer"}>
            <InstagramLogo />
        </Link>

        {/* Instagram logo for phone  */}
        <Link to={"/"} as={RouterLink} 
          p={2} 
          display={{base:"block", md: "none"}} 
          cursor={"pointer"}
          _hover={{bg: "whiteAlpha.200"}}
          w={10}>
            <InstagramMobileLogo />
        </Link>

        <Flex direction={'column'} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>


        {/* Logout  */}
        <Tooltip
          showArrow
          interactive
          content={"Logout"}
          positioning={{ placement: "right-end" }}
          ml={1}
          openDelay={500}
          display={{base:"block", md:"none"}}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10, md:"full"}}
            justifyContent={{base:"center", md:"flex-start"}}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Button display={{base:"none", md:"block"}}
              variant ={"ghost"}
              _hover={{bg:"transparent"}}
              isLoading={isLoggingOut}  
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>

      </Flex>

    </Box>
  )
}

export default Sidebar