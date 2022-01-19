import { SettingsIcon } from "@chakra-ui/icons";
import { Circle, Heading, HStack, IconButton, Image } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<HStack
			justify="space-between"
			px="25px"
			py="10px"
			as="header"
			pos="fixed"
			w="100vw"
		>
			<HStack>
				<Image src="/logo.png" h="50px" />
				<Heading size="lg">PVHS Schedule</Heading>
			</HStack>
			<IconButton
				colorScheme="green"
				p={2}
				icon={<SettingsIcon />}
				aria-label="settings"
				color="white"
				isRound
			/>
		</HStack>
	);
}
