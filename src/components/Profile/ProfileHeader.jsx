import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4, sm:10}} direction={{base:"column", sm:"row"}}>

      {/* Profile Pic  */}
      <AvatarGroup size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar.Root>
          <Avatar.Fallback name="Harsh Yadav" />
          <Avatar.Image src="/profilepic.png" alt="Harsh Yadav" />
        </Avatar.Root>
      </AvatarGroup>


      {/* Username and Dscription */}
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>

        {/* Username  */}
        <Flex gap={4} 
          direction={{base:"column", sm:"row"}}
          justifyContent={{base:"center", sm:"flex-start"}}
          alignItems={"center"}
          w={"full"}  
        >
          <Text fontSize={{base:"sm", md:"lg"}}>
            harsh.yadav.3011
          </Text>

          {/* Button */}
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} 
              color={"black"} 
              _hover={{bg:"whiteAlpha.800"}} 
              size={"xs"}
            >
                Edit Profile
            </Button>
          </Flex>

        </Flex>

        <Flex alignItems={"center"} gap={{base:2, sm:4}}>
          <Text fontSize={"xs"}>
            <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
            Posts
          </Text>

          <Text fontSize={"xs"}>
            <Text as="span" fontWeight={"bold"} mr={1}>100</Text>
            Followers
          </Text>

          <Text fontSize={"xs"}>
            <Text as="span" fontWeight={"bold"} mr={1}>108</Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4} >
          <Text fontSize={"sm"} fontWeight={"bold"}>Harsh Yadav</Text>
        </Flex>

        <Flex alignItems={"center"} gap={4} >
          <Text fontSize={"sm"} fontWeight={"bold"}>Just a Chill Guy</Text>
        </Flex>

      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
