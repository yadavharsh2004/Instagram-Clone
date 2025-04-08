import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'
import useUserProfileStore from '../../store/userProfileStore'

const Caption = ({post}) => {
    const userProfile = useUserProfileStore(state =>state.userProfile);
  return (
    <Flex gap={4} >
          <Link to={`/${userProfile?.username}`}>
            <Avatar.Root>
              <Avatar.Fallback name={userProfile?.fullName || null} />
              <Avatar.Image
                src={userProfile?.profilePicUrl || null}
                sizes={"sm"}
                alt="User profile Pic"
                />
            </Avatar.Root>
          </Link>
    
          <Flex direction={"column"}>
            <Link to={`/${userProfile?.username}`}>
              <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={12}>
                  {userProfile?.username}
                </Text>
                <Text fontSize={14} color={"whiteAlpha.800"}>{post.caption}</Text>
              </Flex>
            </Link>
    
            <Text fontSize={12} color={"gray"}>
              {timeAgo(post.createdAt)}
            </Text>
          </Flex>
        </Flex>
  )
}

export default Caption