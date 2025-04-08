import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
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
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const imageRef = useRef(null);
  const { selectedFile, handleImageChange, setSelectedFile } = usePrevImg();
  const showToast = useShowToast();

  const { isLoading, handleCreatePost } = useCreatePost();

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption);
      setCaption("");
      setSelectedFile(null);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

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
          // className="btn"
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
          <Textarea
            placeholder="Post caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
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
            <Flex
              mt={5}
              w={"full"}
              position={"relative"}
              justifyContent={"center"}
            >
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
            <button
              className="btn btn-sm btn-outline border-white text-black bg-white hover:bg-gray-100 absolute right-2 top-18"
              onClick={async () =>{
                await handlePostCreation();
                document.getElementById('my_modal_3')?.close();
              } }
              // onClick={!isLoading ? handlePostCreation : undefined} // Prevent onClick handler call while loading
              disabled={isLoading} 
            >
              {/* Post */}
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span> // DaisyUI spinner, adjust size (xs, sm, md, lg) if needed
              ) : (
                "Post" // Original button text
              )}
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

function useCreatePost() {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  // const {createPost} = usePostStore();  //same as below
  const createPost = usePostStore((state) => state.createPost);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const addPost = useUserProfileStore((state) => state.addPost);
  const { pathname } = useLocation();

  const handleCreatePost = async (selectedFile, caption) => {
    if (isLoading) return;
    if (!selectedFile) throw new Error("Please select an image ");
    setIsLoading(true);

    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };

    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });

      // const imageRef = ref(storage, `posts/${postDocRef.id}`);
      // await uploadString(imageRef, selectedFile, "data_url")
      // const downloadURL = await getDownloadURL(imageRef);
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

      let downloadURL = "";
      const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const formData = new FormData();

      formData.append("file", selectedFile); // selectedFile is data URL or File object
      formData.append("upload_preset", uploadPreset);
      // Optional: Specify folder or public_id if needed and allowed by preset
      formData.append("folder", "posts");
      formData.append("public_id", postDocRef.id);

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json(); // Parse the response

      if (!response.ok) {
        console.error("Cloudinary Upload Error Response:", data);
        throw new Error(
          data.error?.message || `Cloudinary upload failed: ${response.status}`
        );
      }

      // If upload succeeded, get the secure URL
      downloadURL = data.secure_url;
      // console.log("Cloudinary Upload Success:", downloadURL);

      await updateDoc(postDocRef, { imageURL: downloadURL });

      newPost.imageURL = downloadURL;
      if (userProfile.uid === authUser.uid)
        createPost({ ...newPost, id: postDocRef.id });

      if (pathname !== "/" && userProfile.uid === authUser.uid)
        addPost({ ...newPost, id: postDocRef.id });

      showToast("Success", "Post created successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleCreatePost };
}
