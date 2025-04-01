import { Box, Flex } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import React from "react";
import { AiFillHome } from "react-icons/ai";

const Notifications = () => {
  return (
    <Tooltip
      showArrow
      content = "Notifications"
      interactive
      positioning={{ placement: "right-end" }}
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <AiFillHome size={25} />
        <Box display={{ base: "none", md: "block" }}> Notifications </Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
