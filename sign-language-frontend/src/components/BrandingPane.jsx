import { Box, Image } from '@chakra-ui/react'
import background from "./../web-bg.jpeg"

export const BrandingPane = () => {
    return (
        <Box height="100%">
            <Image
                src={background}
                height="100%"
            />
        </Box>
    )
}
