import {
  Avatar,
  AvatarGroup,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(userProfile?.uid);

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;

  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;


  return (
    <Flex gap={{ base: 4, sm: 10 }} direction={{ base: "column", sm: "row" }}>
      {/* Profile Pic  */}
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar.Root>
          <Avatar.Fallback name="Harsh Yadav" />
          <Avatar.Image
            src={userProfile.profilePicUrl || null}
            alt="Harsh Yadav"
          />
        </Avatar.Root>
      </AvatarGroup>

      {/* Username and Dscription */}
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        {/* Username  */}
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile.username}
          </Text>

          {/* Button */}
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Dialog.Root>
                <Dialog.Trigger asChild>

                  <Button
                    bg={"whiteAlpha.800"}
                    color={"black"}
                    _hover={{ bg: "blue.700", color:"white"}}
                    size={{ base: "xs", md: "sm" }}
                  >
                    Edit Profile
                  </Button>

                </Dialog.Trigger>

                <Dialog.Backdrop />

                <Dialog.Positioner>
                  <Dialog.Content bg={"black"} border={"1px solid"} borderColor={"whiteAlpha.500"}>

                    <Dialog.CloseTrigger position={"absolute"} cursor={"pointer"} top={3} right={4}>
                      X
                    </Dialog.CloseTrigger>

                    <Dialog.Body>
                      <EditProfile  />
                    </Dialog.Body>

                  </Dialog.Content>
                </Dialog.Positioner>
              </Dialog.Root>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.800", color:"black " }}
                size={"xs"}
                onClick={handleFollowUser}
                loading = {isUpdating}
              >
                {isFollowing? "Unfollow": "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={"xs"}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>

          <Text fontSize={"xs"}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>

          <Text fontSize={"xs"}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullName}
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.bio}
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
