import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        placeholder="Username"
        type="text"
        fontSize={14}
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        size={"sm"}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <InputGroup>
        <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            fontSize={14}
            size={"sm"}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        
        <InputRightElement h={"full"}>
            <Button variant={"ghost"} size={"sm"} 
            onClick={()=> setShowPassword(!showPassword)}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
        </InputRightElement>

      </InputGroup>

      <Button w={"full"} colorScheme={"blue"} size={"sm"} fontSize={14} >
        Sign Up
      </Button> 
    </>
  );
};

export default Signup;
