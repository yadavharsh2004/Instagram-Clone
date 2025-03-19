import { Avatar, Box, Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink} from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={'center'} w={"full"}>
        <Flex alignItems={"center"} gap={2}>

            <Avatar.Root size={"lg"}>
                <Avatar.Fallback name="Harsh Yadav" />
                <Avatar.Image src="/profilepic.png" />
            </Avatar.Root>

            <Flex fontSize={12} fontWeight={"bold"} direction={"column"}>
                <Text>harshyadav.3011</Text>    
                <Text color={"gray.500"}>Harsh Yadav</Text>
            </Flex>
        </Flex>

        <Link
            as={RouterLink}
            to={"/auth"}
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.400"}
            style={{textDecoration: "none"}}
            cursor={"pointer"}
        > Log out </Link>
      </Flex>
    </>
  )
}

export default SuggestedHeader