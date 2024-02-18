import { Link, Text } from '@chakra-ui/react'

export const TermsAndPrivacyText = ({
    termsOfUseUrl = "/legal/terms-and-conditions",
    privacyPolicyUrl = "/legal/privacy-policy"
}) => {
    return (
        <Text fontSize="md">
            By continuing you accept our &nbsp;
            <Link color="blue.600" href={termsOfUseUrl}>
                Terms of Use
            </Link>
            &nbsp; and &nbsp;
            <Link color="blue.600" href={privacyPolicyUrl}>
                Privacy Policy
            </Link>
            .
        </Text>
    )
}
