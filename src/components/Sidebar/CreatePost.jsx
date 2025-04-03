import { Box, Button, CloseButton, Flex, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { CreatePostLogo } from "../../assets/constants";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { BsFillImageFill } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { useRef, useState } from "react";
import usePrevImg from "../../hooks/usePrevImg";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const imageRef = useRef(null);
  const { selectedFile, handleImageChange, setSelectedFile } = usePrevImg();

  return (
    <>
      <Tooltip
        showArrow
        content={"Create Post"}
        positioning={{ placement: "right-end" }}
        ml={1}
        openDelay={500}
        delayDuration={500}
        display={{ base: "block", md: "hidden" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <Text p={4} fontWeight={"bold"} fontSize={20}>
            Create Post
          </Text>
          <Textarea placeholder="Post caption..." value={caption} 
            onChange={(e)=> setCaption(e.target.value)}
          />
          <Input
            type="file"
            ref={imageRef}
            hidden
            onChange={handleImageChange}
          />

          <BsFillImageFill
            onClick={() => imageRef.current.click()}
            style={{
              margin: "15px",
              cursor: "pointer",
            }}
            size={20}
          />

          {selectedFile && (
            <Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"} >
              <Image src={selectedFile} alt="Selected img" />
              <CloseButton
                position={"absolute"}
                top={2}
                right={2}
                onClick={() => {
                  setSelectedFile(null);
                }}
              />
            </Flex>
          )}

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-sm btn-outline border-white text-black bg-white hover:bg-gray-100 absolute right-2 bottom-2">
              Post
            </button>
          </form>
        </div>
      </dialog>

      {/* <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />

        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea placeholder="Post caption..." />

            <Input type="file" hidden />

            <BsFillImageFill
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              size={16}
            />
          </ModalBody>

          <ModalFooter>
            <Button mr={3}>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default CreatePost;

// <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </Button>
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click on ✕ button to close</p>
    </form>
  </div>
</dialog>;
