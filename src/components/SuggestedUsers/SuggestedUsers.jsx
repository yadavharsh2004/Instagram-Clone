import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUser from "../../hooks/useGetSuggestedUser";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUser();

  if (isLoading) return null;

  return (
    <>
      <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        {suggestedUsers.length !== 0 && (
          <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
              Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"} >
              See All
            </Text>
          </Flex>
        )}

        {suggestedUsers.map((user) => (
          <SuggestedUser user={user} key={user.id} />
        ))}

        <Box fontSize={12} mt={5} color={"gray.500"} alignSelf={"start"}>
          © 2025 Built By{" "}
          <Link
            href="https://github.com/yadavharsh2004"
            target="_blank"
            color={"blue.500"}
            fontSize={14}
          >
            Harsh Yadav
          </Link>
        </Box>
      </VStack>
    </>
  );
};

export default SuggestedUsers;
