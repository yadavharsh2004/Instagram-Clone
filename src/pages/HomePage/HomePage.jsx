import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={20} direction={{ base: "column", lg: "row" }}>
          <Box maxW={"container.lg"} flex={2} py={10}  >
            <FeedPosts />
          </Box>

          <Box flex={3} mr={20} display="block"
            maxW={"300px"} 
          >
            <SuggestedUsers />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
