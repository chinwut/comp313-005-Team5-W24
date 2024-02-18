import React from 'react'
import {
	Box,
	Button,
	Avatar,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"


export const ProfileAvatar = ({ imgSrc, onLogout }) => {
	return (
		<Box mr={0}>
			<Menu>
				<MenuButton bgColor="transparent" as={Button} rightIcon={<ChevronDownIcon />}>
					{
						imgSrc
							? <Avatar size="xs" src={imgSrc} />
							: <Avatar size="xs" />
					}
				</MenuButton>
				<MenuList>
					<MenuItem onClick={onLogout}>Logout</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	)
}
