import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import React from "react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const Comment = ({ comment }) => {
  const {isLoading, userProfile, setUserProfile} = useGetUserProfileById(comment.createdBy);
  if(isLoading) return <CommentSkeleton />

  return (
    <Flex gap={4} >
      <Link to={`/${userProfile?.username}`}>
        <Avatar.Root>
          <Avatar.Fallback name={userProfile?.fullName || null} />
          <Avatar.Image
            src={userProfile?.profilePicUrl || null}
            sizes={"sm"}
            alt="User profile Pic"
            />
        </Avatar.Root>
      </Link>

      <Flex direction={"column"}>
        <Link to={`/${userProfile?.username}`}>
          <Flex gap={2}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile?.username}
            </Text>
            <Text fontSize={14} color={"whiteAlpha.800"}>{comment.comment}</Text>
          </Flex>
        </Link>

        <Text fontSize={12} color={"gray"}>
          {timeAgo(comment.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;


const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};