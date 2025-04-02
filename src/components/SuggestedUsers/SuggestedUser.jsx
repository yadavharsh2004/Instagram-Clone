import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

	const onFollowUser = async () => {
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing
				? user.followers.filter((follower) => follower.uid !== authUser.uid)
				: [...user.followers, authUser],
		});
	};

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar.Root size={"md"}>
            <Avatar.Fallback name="user.fullName" />
            <Avatar.Image src={user.profilePicUrl || null} />
          </Avatar.Root>

          <VStack spacing={2} alignItems={"flex-start"}>
            <Text fontSize={12} fontWeight={"bold"}>
              {user.fullName}
            </Text>
            <Text fontSize={11} color={"gray.500"}>
              {user.followers.length} followers
            </Text>
          </VStack>
        </Flex>

        {authUser.uid !== user.uid && (
          <Button
            fontSize={13}
            bg={"transparent"}
            p={0}
            h={"max-content"}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            _hover={{ color: "white" }}
            loading={isUpdating}
            onClick={onFollowUser}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default SuggestedUser;
