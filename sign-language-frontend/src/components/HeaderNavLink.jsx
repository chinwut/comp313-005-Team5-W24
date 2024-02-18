import { chakra, useColorModeValue } from "@chakra-ui/react";
import { useRoute } from "wouter";

export const HeaderNavLink = ({ href, children, ...rest }) => {
    const [isActive] = useRoute(href);
    const color = useColorModeValue("gray.600", "whiteAlpha.800");
    const bg = useColorModeValue("gray.100", "whiteAlpha.100");

    return (
        <chakra.a
            href={href}
            aria-current={isActive ? "page" : undefined}
            display="block"
            py="1"
            px="3"
            borderRadius="4px"
            transition="all 0.2s"
            color={color}
            fontWeight="normal"
            _hover={{ bg: bg }}
            _activeLink={{
                fontWeight: "semibold",
                color: "teal.500",
            }}
            {...rest}
        >
            {children}
        </chakra.a>
    );
};
