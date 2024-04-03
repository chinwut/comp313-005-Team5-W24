import React from 'react';
import Image from 'next/image';
import { K2D } from "next/font/google";
import Link from 'next/link';
const k2d = K2D({ weight: "800", subsets: ["latin"] })
const k2d2 = K2D({ weight: "400", subsets: ["latin"] })

const PrivacyPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <div className="text-center mb-4">
                <Image className="mx-auto max-w-full mt-[100px] mb-[60px]" src="/logo-full.png" alt="Logo" width={400} height={184} />
            </div>
            <div className="max-w-[600px] mx-auto my-4 pb-20">
                <h1 className={`${k2d.className} text-gray-500 font-bold text-3xl`}>Privacy</h1>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Introduction</h2>
                <p>At [Sign Language Translator], accessible from this url, one of our main priorities is the privacy of our users. This Privacy Policy document outlines the types of information that are collected and recorded by [Sign Language Translator] and how we use it.</p>
                <p>This policy applies only to our online activities and is valid for visitors to our website with regards to the information shared and/or collected in [Sign Language Translator]. This policy does not apply to any information collected offline or via channels other than this website.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Consent</h2>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Information We Collect</h2>
                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you decide to register for an account with [Sign Language Translator], we may ask for your contact information, including items such as name and email address.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>How We Use Your Information</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul className="list-disc">
                    <li><p>Provide, operate, and maintain our website</p></li>
                    <li><p>Improve and personalize your experinece</p></li>
                    <li><p>Find and prevent fraud</p></li>
                </ul>
                <p className="text-center text-blue-800 mt-10">
                    <Link href="/">back</Link>
                </p>
            </div>
        </main>
    );
};

export default PrivacyPage;
