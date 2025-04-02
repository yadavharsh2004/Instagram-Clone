import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { SearchLogo } from "../../assets/constants";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);
  const { isLoading, getUserProfile, user, setUser } = useSearchUser();

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
    console.log(user);
  };

  return (
    <>
      <Tooltip
        showArrow
        content={"Search"}
        positioning={{ placement: "right-end" }}
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
		<Flex
			alignItems={"center"}
			gap={4}
			_hover={{ bg: "whiteAlpha.400" }}
			borderRadius={6}
			p={2}
			w={{ base: 10, md: "full" }}
			justifyContent={{ base: "center", md: "flex-start" }}
			onClick={onOpen}
		>
			<SearchLogo />
			<Box display={{ base: "none", md: "block" }}>Search</Box>
		</Flex>			
      </Tooltip>
		
	  <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
	  	<ModalOverlay />
	  	<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
	  		<ModalHeader>Search user</ModalHeader>
	  		<ModalCloseButton />
	  		<ModalBody  pb={6}>
	  			<form onSubmit={handleSearchUser}>
	  				<FormControl>
	  					<FormLabel>Username</FormLabel>
	  					<Input placeholder='harshyadav.3011' ref={searchRef} />
	  				</FormControl>
  
	  				<Flex w={"full"} justifyContent={"flex-end"}>
	  					<Button type='submit' ml={"auto"} size={"sm"} my={4} loading={isLoading}>
	  						Search
	  					</Button>
	  				</Flex>
	  			</form>
	  			{user && <SuggestedUser user={user} setUser={setUser} />}
	  		</ModalBody>
	  	</ModalContent>
	  </Modal>
    </>
  );
};

export default Search;






// <Dialog.Root>
// <Dialog.Trigger asChild>
  
// </Dialog.Trigger>

// <Dialog.Backdrop	 />

// <Dialog.Positioner>
//   <Dialog.Content
// 	bg="black"		
// 	border="1px solid gray"
// 	boxShadow="lg"
// 	maxW="400px"
//   >
// 	<Dialog.Header>
// 	  <Dialog.Title>Search User</Dialog.Title>
// 	</Dialog.Header>

// 	<Dialog.CloseTrigger position={"absolute"} cursor={"pointer"} top={3} right={4}>
// 	  X
// 	</Dialog.CloseTrigger>

// 	<Dialog.Body bg={"black"} pb={6}>
// 	  <form onSubmit={handleSearchUser}>
// 		<FormControl>
// 		  <FormLabel> Username </FormLabel>
// 		  <Input placeholder="harshyadav.3011" ref={searchRef} />
// 		</FormControl>

// 		<Flex w={"full"} justifyContent={"flex-end"}>
// 		  <Button
// 			type="submit"
// 			ml={"auto"}
// 			size={"sm"}
// 			my={4}
// 			loading={isLoading}
// 		  >
// 			Search
// 		  </Button>
// 		</Flex>
// 	  </form>

// 	  {user && <SuggestedUser user={user} />}

// 	</Dialog.Body>
//   </Dialog.Content>
// </Dialog.Positioner>
// </Dialog.Root>