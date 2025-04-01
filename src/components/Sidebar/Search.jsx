import { Box, Flex } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import { SearchLogo } from "../../assets/constants";

const Search = () => {
	return (
		<>
			<Tooltip
				showArrow
				content={"Search"}
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
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
		</>
	);
};

export default Search;