import { Avatar, Box, Flex, Text, Button, AvatarFallback } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  
  const {handleLogout, isLoggingOut, error} = useLogout();
  const authUser = useAuthStore((state) => state.user);
  if (!authUser) return null;

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={'center'} w={"full"}>
        <Flex alignItems={"center"} gap={2}>

            <Link to={`${authUser.username}`}>
              <Avatar.Root size={"lg"}>
                <AvatarFallback />
                  <Avatar.Image src={authUser.profilePicUrl || null}  /> 
              </Avatar.Root>
            </Link>

            <Flex fontSize={12} fontWeight={"bold"} direction={"column"}>
              <Link to={`${authUser.username}`}>
                <Text>{authUser.username} </Text>    
                <Text color={"gray.500"}>Harsh Yadav</Text>
              </Link>
            </Flex>
        </Flex>

        <Button
            size={"xs"}
            background={"transparent"}
            _hover={{background:"transparent"}}
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            loading= {isLoggingOut}
            onClick={handleLogout}
        > Log out </Button>
      </Flex>
    </>
  )
}

export default SuggestedHeader