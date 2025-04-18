import { Box, Link } from '@chakra-ui/react'
import { Tooltip } from "@/components/ui/tooltip"
import {Link as RouterLink} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <Tooltip
            showArrow
            content = "Home"
            interactive
            positioning={{ placement: "right-end" }}
            ml={1}
            openDelay={500}
            display={{base:"block", md:"none"}}
        >
            <Link
                display={"flex"}
                to={"/"}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{bg:"whiteAlpha.400"}}
                borderRadius={6}
                p={2}
                w={{base:10, md:"full"}}
                justifyContent={{base:"center", md:"flex-start"}}
            >
            <AiFillHome size={25} />
            <Box display={{base:"none", md:"block"}}> Home </Box>
            </Link>
        </Tooltip>
    </>
  )
}

export default Home