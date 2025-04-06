import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Comment = ({ comment }) => {
  return (
    <Flex gap={4} >
      <Avatar.Root>
        <Avatar.Image
          src="/profilepic.png"
          sizes={"sm"}
          alt="User profile Pic"
        />
      </Avatar.Root>

      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            username
          </Text>
          <Text fontSize={14} color={"whiteAlpha.800"}>{comment.comment}</Text>
        </Flex>

        <Text fontSize={12} color={"gray"}>
          createdAt
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
