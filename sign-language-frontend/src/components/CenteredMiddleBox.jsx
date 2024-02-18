import { ReactNode } from 'react';
import { Box, Center, Spacer, VStack } from '@chakra-ui/react';
import { FullPageBox } from './FullPageBox';

export const CenteredMiddleBox = ({ children, ...boxProps }) => {
    return (
        <FullPageBox {...boxProps}>
            <VStack height="full">
                <Spacer />
                <Center>
                    <Box>
                        {children}
                    </Box>
                </Center>
                <Spacer />
            </VStack>
        </FullPageBox>
    );
};
