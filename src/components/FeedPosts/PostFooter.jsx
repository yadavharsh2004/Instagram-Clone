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

const PostFooter = ({ post, username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const { isCommenting, handlePostComment } = usePostComment();
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    //  maxW="470px"
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike}>
          {liked ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontSize={"sm"}>{likes} likes</Text>

      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={"700"}>
            {username}{" "}
            <Text as="span" flexWrap={200}>
              Feeling good!!
            </Text>
          </Text>

          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 comments
          </Text>
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
