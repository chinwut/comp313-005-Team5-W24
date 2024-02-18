import { Box } from '@chakra-ui/react';
import { loginAnonymously, loginWithEmail, loginWithGoogle } from '../../auth';
import { BrandingPane, ColorModeSwitcher, FullPageBox, LoginPane } from '../../components';
import { useLocation } from 'wouter';

const LoginPage = () => {
    const [, setLocation] = useLocation();

    const goToSignup = () => setLocation("/signup");

    return (
        <FullPageBox px={0} display={{ md: "flex" }}>
            <Box position="absolute" right="8px" top="8px">
                <ColorModeSwitcher />
            </Box>
            <Box display={{ base: "none", md: "block" }} width="full">
                <BrandingPane />
            </Box>
            <Box px={4} width={{ base: "100%", md: "48em" }}>
                <LoginPane
                    onGoogleLogin={loginWithGoogle}
                    onAnonymousLogin={loginAnonymously}
                    onEmailLogin={loginWithEmail}
                    onSignupClicked={goToSignup}
                />
            </Box>
        </FullPageBox>
    );
};

export default LoginPage;
