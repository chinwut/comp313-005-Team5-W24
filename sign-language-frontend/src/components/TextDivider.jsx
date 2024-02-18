import { Divider, Flex, Text } from '@chakra-ui/react'
export const TextDivider = ({ text }) => {
    return (
        <Flex alignItems="center">
            <Divider />
            <Text
                mx={2}
                color="gray.400"
                textTransform="lowercase"
                fontStyle="italic"
                fontWeight="bold"
            >
                {text}
            </Text>
            <Divider />
        </Flex>
    )
}
