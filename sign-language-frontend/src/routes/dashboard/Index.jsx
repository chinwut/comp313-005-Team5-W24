import { Button, Text, Input } from '@chakra-ui/react';
import { signOutUser } from '../../auth';
import { CenteredMiddleBox } from '../../components';
import { AppName } from '../../utils';
import logo from './../../logo.svg';
import TextToSpeech from '../../components/TextToSpeech';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText('Text-to-speech is a feature that can make the translated sign language text to a voice sound');
    },  [text]);

    return (
        <CenteredMiddleBox p={5}>
            <img src={logo} className="App-logo" alt="logo" />
            <Text>
                {AppName}
            </Text>

            <Input placeholder={text} onChange={(e) => setText(e.target.value)} />
            <TextToSpeech text={text} />
            <br />
            <Button variant="outline" colorScheme="cyan" onClick={signOutUser}>
                Sign out
            </Button>
        </CenteredMiddleBox>
    );
};

export default Dashboard;
