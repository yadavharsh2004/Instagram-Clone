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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React from "react";
import Comment from "../Comments/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

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
            // onClick={onOpen}
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
                <Flex>
                  <AiFillHeart size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    7
                  </Text>
                </Flex>

                <Flex>
                  <FaComment size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    7
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Image
              src={img}
              alt="profile post"
              width={"100%"}
              height={"100%"}
            />
          </GridItem>
        </Dialog.Trigger>

        {/*
        <Modal isOpen={isOpen} onClose={onClose}
          isCentered ={true}
          size={{base:"3xl", md:"5xl"}}  
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody bg={"black"} pb={5}>

              <Flex gap={4} w={{base:"90%", sm:"70%", md:"full"}} mx={"auto"}>

                <Box
                  borderRadius={4}
                  overflow={"hidden"}
                  border={"1px solid"}
                  borderColor={"whiteAlpha.300"}
                  flex={1.5}
                >
                  <Image src={img} alt='profile Post'/> 
                </Box>

                <Flex flex={1} flexDirection={"column"} px={10} display={{base:"none", md:"flex"}}>
                  <Flex>

                  </Flex>
                </Flex>

              </Flex> 
                body
            </ModalBody>
          </ModalContent>
        </Modal>  */}

        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger position={"absolute"} top={0} right={0}>
              <CloseButton />
            </Dialog.CloseTrigger>
            <Dialog.Body bg={"black"} pb={5}>
              <Flex
                gap={4}
                w={{ base: "90%", sm: "70%", md: "full" }}
                mx={"auto"}
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
                  h={"682px"}
                  w={"100%"}
                  maxW={"600px"}
                  
                >
                  <Image maxH={"682px"} src={img} alt="profile Post" />
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
                        <Avatar.Image
                          src="/profilepic.png"
                          sizes={"sm"}
                          alt="User profile Pic"
                        />
                      </Avatar.Root>

                      <Text fontWeight={"bold"} fontSize={12}>
                        harsh.yadav.3011
                      </Text>
                    </Flex>

                    <Box
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                      borderRadius={4}
                      p={1}
                    >
                      <MdDelete size={20} cursor={"pointer"} />
                    </Box>
                  </Flex>

                  <VStack
                    gap={3}
                    w={"full"}
                    alignItems={"start"}
                    maxH={"350px"}
                    overflow={"auto"}
                    py={4}
                  >
                    <Comment
                      createdAt={"3h ago"}
                      username={"harsh.yadav.3011"}
                      profilepic={"profilepic.png"}
                      text={"NOICE"}
                    />
                    <Comment
                      createdAt={"3h ago"}
                      username={"ansu.gupta.1303"}
                      profilepic={"profilepic.png"}
                      text={"NOICE"}
                    />
                    <Comment
                      createdAt={"3h ago"}
                      username={"ansu.gupta.1303"}
                      profilepic={"profilepic.png"}
                      text={"NOICE"}
                    />
                    <Comment
                      createdAt={"3h ago"}
                      username={"rishabh.singh.3009"}
                      profilepic={"profilepic.png"}
                      text={"NOICE"}
                    />
                  </VStack>
                  <Box borderBottom={"2px solid"} borderColor={"gray.800"}></Box>
                  <PostFooter isProfilePage={true} />
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
