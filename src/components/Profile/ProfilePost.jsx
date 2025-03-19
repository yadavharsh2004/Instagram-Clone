import { Flex, GridItem, Image, Text } from '@chakra-ui/react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import React from 'react'

const ProfilePost = ({img}) => {
  return (
    <GridItem
      cursor={"pointer"}
      overflow={"hidden"}
      borderRadius={4}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={1/1}
    >
      <Flex 
        opacity={0}
        _hover={{opacity:1}}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
        bg={'blackAlpha.700'}
        transition={"all 0.3s easy"} 
        zIndex={1}
        justifyContent={"center"}
      > 

        <Flex alignItems={"center"} justifyContent={"center"} gap={50} >

          <Flex>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>

          <Flex>
            <FaComment size={20} />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>

        </Flex>
      </Flex>

      <Image src={img} alt='profile post' width={"100%"} height={"100%"} />
    </GridItem>
  )
}

export default ProfilePost