import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>

          <Avatar.Root size={"md"}>
              <Avatar.Fallback name={name} />
              <Avatar.Image src={avatar} />
          </Avatar.Root>

          <VStack spacing={2} alignItems={"flex-start"}>

            <Text fontSize={12} fontWeight={"bold"}>
              {name}
            </Text> 
            <Text fontSize={11} color={"gray.500"}>
              {followers} followers
            </Text>

          </VStack>

        </Flex>

        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </Flex>
    </>
  );
};

export default SuggestedUser;
