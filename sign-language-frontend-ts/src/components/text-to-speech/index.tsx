import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getAuth } from 'firebase/auth';
import app from "@/hooks/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

type TextToSpeechProps = {
    text: string;
};

const TextToSpeech = ({ text }: TextToSpeechProps) => {

}

export default TextToSpeech;