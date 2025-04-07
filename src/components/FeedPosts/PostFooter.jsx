import { Box, Flex, Input, Text, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { InputGroup } from "@/components/ui/input-group";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const { isCommenting, handlePostComment } = usePostComment();
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);

  const {isLiked, likes, handleLikePost} = useLikePost(post);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    //  maxW="470px"
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost}>
          {isLiked ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontSize={"sm"}>{likes} likes</Text>

      {isProfilePage && (
        <Text fontSize={12} color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={"700"}>
            {creatorProfile?.username}{" "}
            <Text as="span" flexWrap={200}>
              {post.caption}
            </Text>
          </Text>

          {post.comments.length > 0? (
            <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
              View all {post.comments.length} comments
            </Text>
          ):(
          <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
            Be the first to comment on this post
          </Text>)}
        </>
      )}

      {authUser && (
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
          w={"full"}
        >
          <InputGroup
            flex="1"
            // startElement={<Comment here />}
            endElement={
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                background={"transparent"}
                onClick={handleSubmitComment}
              >
                Post
              </Button>
            }
          >
            <Input
              placeholder="Comment here ..."
              variant={"flushed"}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              ref={commentRef}
            />
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
