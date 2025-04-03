import { Avatar, Box, Link } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProfileLink = () => {
	const authUser = useAuthStore((state) => state.user);
	if(!authUser) return null
	return (
		<Tooltip
			hasArrow
            interactive
			content={"Profile"}
            positioning={{ placement: "right-end" }}
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "hidden" }}
		>
			<Link
				display={"flex"}
				to={`/${authUser?.username}`}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
                <Avatar.Root>
                    <Avatar.Fallback name="Harsh Yadav" />
                    <Avatar.Image
                        src={authUser?.profilePicUrl || null}
                    />
                </Avatar.Root>
				<Box display={{ base: "none", md: "block" }}>Profile</Box>
			</Link>
		</Tooltip>
	);
};

export default ProfileLink;