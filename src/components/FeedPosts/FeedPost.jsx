// import PostHeader from './PostHeader'
// import { Box, Image } from '@chakra-ui/react'
// import PostFooter from './PostFooter'

// const FeedPost = ({img, username, avatar}) => {
//   return (
//     <>
//         <PostHeader username={username} avatar={avatar} />
//         {/* maxW="468px" maxH="585px"  */}
//         <Box my={2} borderRadius={7} overflow={"hidden"}  >
//             <Image src={img} alt='user profile pic'/>
//         </Box>
//         <PostFooter username={username} />
//     </>
//   )
// }

// export default FeedPost





// this made my feed on center but it could cause problem too so just saved it for later 

import PostHeader from './PostHeader'
import { Box, Container, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const FeedPost = ({img, username, avatar}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh" border={"1px solid"}>
    {/* <Container border={"1px solid"}> */}
        <Box>
        <PostHeader username={username} avatar={avatar}  />

        {/* maxW="468px" maxH="585px"  */}
        <Box my={2} borderRadius={7} overflow={"hidden"} maxW="468px" maxH="585px"  >
            <Image src={img} alt='user profile pic'/>
        </Box>
        <PostFooter username={username} /></Box>
    {/* </Container> */}
    </Box>
  )
}

export default FeedPost