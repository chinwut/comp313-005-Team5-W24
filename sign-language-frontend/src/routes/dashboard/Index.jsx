import { Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import HandsCapture from '../../components/HandsCapture';
import TextToSpeech from '../../components/TextToSpeech';
const Dashboard = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText('Text-to-speech is a feature that can make the translated sign language text to a voice sound');
    },  [text]);

    return (
        <>
        <HandsCapture /> 
        <Input placeholder={text} onChange={(e) => setText(e.target.value)} />
        <TextToSpeech text={text} />
        </>
    );
};

export default Dashboard;
