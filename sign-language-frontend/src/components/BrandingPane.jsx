import { Box, Image } from '@chakra-ui/react'
import background from "./../OIG4.jpeg"

export const BrandingPane = () => {
    return (
        <Box height="100%">
            <Image
                src={background}
                height="140%"
            />
        </Box>
    )
}
