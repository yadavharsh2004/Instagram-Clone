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
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  const {userProfile} = useGetUserProfileById(post.createdBy);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh" >  
    {/* <Container border={"1px solid"}> */}
        <Box>
        <PostHeader post={post} creatorProfile={userProfile} />

        {/* maxW="468px" maxH="585px"  */}
        <Box my={2} borderRadius={7} overflow={"hidden"} maxW="468px" maxH="585px"  >
            <Image src={post.imageURL} alt='Feed Post Image'/>
        </Box>
          <PostFooter post={post} creatorProfile={userProfile} />
        </Box>
    {/* </Container> */}
    </Box>
  )
}

export default FeedPost