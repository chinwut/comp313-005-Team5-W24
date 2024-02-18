import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { useWindowDimensions } from '../hooks';

export const FullPageBox = ({ children, ...boxProps }) => {
    const { height, width } = useWindowDimensions();
    return (
        <Box height={`${height}px`} width={`${width}px`} {...boxProps}>
            {children}
        </Box>
    );
};
