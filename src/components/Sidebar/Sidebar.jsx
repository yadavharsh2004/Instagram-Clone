import { Avatar, Box, Flex, Link, Button } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import {AiFillHome} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import { Tooltip } from "@/components/ui/tooltip"
import useLogout from '../../hooks/useLogout'

const Sidebar = () => {

  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo /> ,
      text: "Search" ,
    },
    {
      icon: <NotificationsLogo /> ,
      text: "Notifications" ,
    },
    {
      icon: <CreatePostLogo /> ,
      text: "Create" ,
    },
    {
      icon:  (
        <Avatar.Root size="sm">
          <Avatar.Image src="/profilepic.png" alt="Burak orkmez" />
          <Avatar.Fallback name="Burak orkmez" />
        </Avatar.Root> 
      ),
      text: "Profile" ,
      link: "/harshProfile" ,
    },
  ]

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
          {sidebarItems.map((item, index)=>(
            <Tooltip
              key={index}
              showArrow
              interactive
              content={item.text}
              positioning={{ placement: "right-end" }}
              ml={1}
              openDelay={500}
              display={{base:"none", md:"block"}}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{bg:"whiteAlpha.400"}}
                borderRadius={6}
                p={2}
                w={{base:10, md:"full"}}
                justifyContent={{base:"center", md:"flex-start"}}
              >
                {item.icon}
                <Box display={{base:"none", md:"block"}}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
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