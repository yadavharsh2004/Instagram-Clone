import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'
import { Skeleton, SkeletonCircle, SkeletonText} from "../ui/skeleton"
import useGetFeedPost from '../../hooks/useGetFeedPost'


const FeedPosts = () => {
  const {isLoading, posts} = useGetFeedPost();
    

  return (
    // maxW={"container.sm"}
    <Container py={10} px={2} >
        {isLoading &&  
            [0, 1, 2].map((_, idx)=>(
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size='10' />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height='10px' w='200px' />
                            <Skeleton height='10px' w='200px' />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"400px"}>Contents Wrapped </Box>
                    </Skeleton>
                </VStack>
            ))
        }
        {!isLoading && posts.length > 0 && (
          posts.map(post => <FeedPost key={post.id} post = {post}/>)
        )}
        {!isLoading && posts.length === 0 && (
				<>
					<Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
					<Text color={"red.400"}>Stop coding and go make some!!</Text>
				</>
			)}
    </Container>
  )
}

export default FeedPosts