import { Alert, AlertIndicator, Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"

const Login = () => {

    const [inputs, setInputs] = useState({
        email : "",
        password : "",
    })

    const {loading, error, login} = useLogin();

  return (
    <>

        <Input placeholder="Email"    
            fontSize={14}
            size={"sm"}
            type="email" 
            value={inputs.email} 
            onChange={(e) => setInputs({...inputs, email: e.target.value} )} 
            />

        <Input placeholder="Password"
            fontSize={14} 
            size={"sm"}
            type="password"
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs, password: e.target.value})}
        />

        {error && (
            <Alert.Root status={"error"} fontSize={12} p={2} borderRadius={4} >
                <AlertIndicator fontSize={12} />
                {error.message}
            </Alert.Root>
        )}

        <Button w={"full"} colorScheme={"blue"} size={"sm"} fontSize={14}
            loading = {loading}
            onClick={()=> login(inputs)}
        >
            Log in
        </Button>
    </>
  )
}

export default Login