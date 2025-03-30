import {
  Avatar,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Wrap,
  Text,
  Dialog,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import useAuthStore from "../../store/authStore";

const EditProfile = () => {
    const authUser = useAuthStore((state) => state.user)

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        bio: '',
    })
    const handleEditProfile = () =>{
        console.log(inputs);
    }
  return (
    <>
      <Flex bg={"black"} >
        <Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Edit Profile
          </Heading>
          <Stack>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar.Root size="xl" border={"2px solid white "} >
                  <Avatar.Fallback/>
                </Avatar.Root>
              </Center>

              <Center w="full">
                {/* <Button w="full">Edit Profile Picture</Button> */}
              </Center>
            </Stack>
          </Stack>

          <Stack>
            <Text as={"label"} fontSize={"sm"}>
              Full Name
            </Text>
            <Input placeholder={"Full Name"} size={"sm"} type={"text"} 
                value={inputs.fullName || authUser.fullName}
                onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}
                />
          </Stack>

          <Stack>
            <Text as={"label"} fontSize={"sm"}>
              Username
            </Text>
            <Input placeholder={"Username"} size={"sm"} type={"text"}
                value={inputs.username || authUser.username}
                onChange={(e)=>setInputs({...inputs, username: e.target.value})}
            />
          </Stack>

          <Stack>
            <Text as={"label"} fontSize={"sm"}>
              Bio
            </Text>
            <Input placeholder={"Bio"} size={"sm"} type={"text"}
                value={inputs.bio || authUser.bio}
                onChange={(e)=>setInputs({...inputs, bio: e.target.value})}
            />
          </Stack>

          <Flex spacing={6} flexDirection={{base: "row"}} justifyContent="center" gap={4} pt={5}>
            <Dialog.CloseTrigger position={"relative"} top={0} left={0}>
                <Box
                    px={4}
                    py={2}
                    borderRadius="md"
                    w={"100%"}
                    bg={"red.400"}
                    color={"white"}
                    fontSize={"md"}
                    cursor={"pointer"}
                    _hover={{ bg: "red.500" }}
                >
                Cancel
                </Box>
            </Dialog.CloseTrigger>

            <Box
              px={4}
              py={2}
              borderRadius="md"
              bg={"blue.400"}
              color={"white"}
              fontSize={"md"}
              _hover={{ bg: "blue.500" }}
              cursor={"pointer"}
              onClick={handleEditProfile}
            >
              Submit
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default EditProfile;
