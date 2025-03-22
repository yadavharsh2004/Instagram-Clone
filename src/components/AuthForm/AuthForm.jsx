import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email : "",
    password : "",
    confirmPassword : "",
  })

  // const handleAuth = () =>{
  //   if(!inputs.email || !inputs.password || !inputs.confirmPassword){
  //     alert("Please fill all the fields");
  //     return ;
  //   }

  //   navigate("/");
  // }

  return (
    <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>

        <Image src="/logo.png"        h={24}       cursor={"pointer"} alt="Instagram" />
        
        {isLogin ? <Login /> : <Signup />}



        {/* OR Text  */}
        <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"}>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text mx={1} color={"white"} > OR </Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>

        <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
          <Image src="/google.png" w={5} alt="Google img"/>
          <Text mx={2} color={"blue.500"}>
            Log in with Google
          </Text>
        </Flex>


      </VStack>
    </Box>


    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex justifyContent={"center"} alignItems={"center"}> 
          <Box mx={2} fontSize={14}>
            {isLogin? "Don't have an account?": "Already have an account?"}
          </Box>
          <Box onClick={()=> setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}  >
            {isLogin? "Sign up" : "Log in"}
          </Box>
        </Flex>
    </Box>
    </>
  );
};

export default AuthForm;
