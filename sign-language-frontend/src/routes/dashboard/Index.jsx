import { Button, Text } from '@chakra-ui/react';
import { signOutUser } from '../../auth';
import { CenteredMiddleBox } from '../../components';
import { AppName } from '../../utils';
import logo from './../../logo.svg';

const Dashboard = () => {
    return (
        <CenteredMiddleBox p={5}>
            <img src={logo} className="App-logo" alt="logo" />
            <Text>
                {AppName}
            </Text>
            <br />
            <Button variant="outline" colorScheme="cyan" onClick={signOutUser}>
                Sign out
            </Button>
        </CenteredMiddleBox>
    );
};

export default Dashboard;
