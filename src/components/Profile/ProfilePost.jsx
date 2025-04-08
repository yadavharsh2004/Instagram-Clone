import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";
import Comment from "../Comments/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";
import Caption from "../Comments/Caption";
import {X} from 'lucide-react'

const ProfilePost = ({ post  }) => {
  const userProfile = useUserProfileStore(state => state.userProfile);
  const authUser = useAuthStore(state => state.user)
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore(state => state.deletePost);
  const deletePostFromProfile = useUserProfileStore(state=> state.deletePost);

  const handleDeletePost = async () =>{
    if(!window.confirm("Are you sure, you want to delete your post??")) return ;
    if(isDeleting) return ;
    setIsDeleting(true);

    try {
      //TODO :: add this after getting firebase storage

      // const imageRef = ref(storage, `posts/${post.id}`); 
      // await deleteObject(imageRef);
      const userRef = doc(firestore, "users", authUser.uid);
      await deleteDoc(doc(firestore, "posts", post.id)); 

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      })

      deletePost(post.id);
      deletePostFromProfile(post.id);
      showToast("Success", "Post deleted successfully", "success"); 

    } catch (error) {
      showToast("Error", error.message, "error");
    }
    finally{
      setIsDeleting(false);
    }
  }

  return (
    <>
      <Dialog.Root placement={"center"} size={{ base: "lg", md: "xl" }}>
        <Dialog.Trigger asChild>
          <GridItem
            cursor={"pointer"}
            overflow={"hidden"}
            borderRadius={4}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            position={"relative"}
            aspectRatio={1 / 1}
          >
            <Flex
              opacity={0}
              _hover={{ opacity: 1 }}
              position={"absolute"}
              top={0}
              bottom={0}
              left={0}
              right={0}
              bg={"blackAlpha.700"}
              transition={"all 0.3s ease"}
              zIndex={10}
              justifyContent={"center"}
            >
              <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                {/* No of Likes  */}
                <Flex>
                  <AiFillHeart size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    {post.likes.length}
                  </Text>
                </Flex>

                {/* No of comments  */}
                <Flex>
                  <FaComment size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    {post.comments.length}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Image src={post.imageURL || null}
              alt="profile post"
              width={"100%"}
              height={"100%"}
            />
          </GridItem>
        </Dialog.Trigger>

        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>

            <Dialog.CloseTrigger position={"absolute"} cursor={"pointer"} top={3} right={3}>
              {/* <CloseButton /> */}
              <X />
            </Dialog.CloseTrigger>

            <Dialog.Body bg={"black"} pb={5}>
              <Flex
                gap={4}
                w={{ base: "90%", sm: "70%", md: "full" }}
                mx={"auto"}
                maxH={"90vh"}
                minH={"50vh"}
              >
                {/* Left Side  */}
                <Flex
                  borderRadius={4}
                  overflow={"hidden"}
                  border={"1px solid"}
                  borderColor={"whiteAlpha.300"}
                  flex={1.5}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"100%"}                  
                >
                  <Image maxH={"682px"}  src={post.imageURL || null} alt="profile Post" />
                </Flex>

                {/* Right Side  */}
                <Flex
                  flex={1}
                  flexDirection={"column"}
                  px={10}
                  display={{ base: "none", md: "flex" }}  
                >
                  {/* userProfilepic and username  */}
                  <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    borderBottom={"2px solid "}
                    borderColor={"gray.700"}
                    pb={4}
                  >
                    <Flex alignItems={"center"} gap={4}>
                      <Avatar.Root>
                        <Avatar.Fallback name={userProfile.fullName} />
                        <Avatar.Image
                          src={userProfile.profilePicUrl || null}
                          sizes={"sm"}
                          alt="User profile Pic"
                        />
                      </Avatar.Root>

                      <Text fontWeight={"bold"} fontSize={12}>
                        {userProfile.username}
                      </Text>
                    </Flex>

                    {authUser?.uid === userProfile.uid && (
                      <Button
                        _hover={{ bg: "whiteAlpha.100", color: "red.600" }}
                        borderRadius={4}
                        p={1}
                        size={"sm"}
                        color={"white"}
                        bg={"transparent  "}
                        onClick={handleDeletePost}
                        loading={isDeleting}
                      >
                        <MdDelete  size={20} cursor={"pointer"} />
                      </Button>
                    )}
                  </Flex>

                  <VStack 
                    gap={3}
                    w={"full"}
                    alignItems={"start"}
                    maxH={"350px"}
                    overflow={"auto"}
                    py={4}
                  >
                    {/* Captions  */}
                    {post.caption && <Caption post={post} />}
                    {/* comments  */}
                    {post.comments.map((comment)=>(
                      <Comment key={comment.id} comment={comment} />
                    ))}
                  </VStack>

                  <Box borderBottom={"2px solid"} borderColor={"gray.800"}></Box>

                  <PostFooter isProfilePage={true} post={post} />

                </Flex>
                
              </Flex>
            </Dialog.Body>

          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default ProfilePost;
