import React from 'react';
import Image from 'next/image';
import { K2D } from "next/font/google";
import Link from 'next/link';
const k2d = K2D({ weight: "800", subsets: ["latin"] })
const k2d2 = K2D({ weight: "400", subsets: ["latin"] })

const TermPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <div className="text-center mb-4 pt-10">
                <Image className="mx-auto max-w-full mb-[60px]" src="/logo-full.png" alt="Logo" width={400} height={184} />
            </div>
            <div className="max-w-[600px] mx-auto my-4 pb-20">
                <h1 className={`${k2d.className} text-gray-500 font-bold text-3xl`}>Term of use</h1>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Introduction</h2>
                <p className="text-gray-600">Welcome to [Sign Language Translator] (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Our web application is designed to facilitate the learning of American Sign Language (ASL) fingerspelling through the use of machine learning models trained on the Chicago Fingerspelling in the Wild Dataset. This service is provided for academic purposes only, as part of the COMP313 Software Project 2 at Centennial College, AI (Fast Track) Program.</p>
                <p className="text-gray-600">By accessing or using our service, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Account Registration and Use</h2>
                <ol className="list-disc">
                    <li><p className="text-gray-600">Eligibility: To use our application, you must register for an account. By registering, you affirm that you are of legal age to enter into this agreement.</p></li>
                    <li><p className="text-gray-600">Account Use: Your account is for your personal, academic use only. Sharing account details or allowing others to access your account is prohibited.</p></li>
                    <li><p className="text-gray-600">Data Use and Privacy: We collect and use your data only for academic purposes. Your data will not be used commercially or for any purpose outside the scope of this academic project. For more information, please refer to our Privacy Policy.</p></li>
                </ol>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Intellectual Property</h2>
                <p className="text-gray-600">The machine learning models, software, visual design elements, and educational content provided through our application are the intellectual property of [Your Application Name] and its licensors. These materials may not be copied, modified, distributed, or used without prior written consent from us.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>User Conduct</h2>
                <ol className="list-disc">
                    <li><p className="text-gray-600">Termination: We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions.</p></li>
                    <li><p className="text-gray-600">Account Deletion: You can delete your account at any time through your account settings. Upon deletion, all your data will be permanently removed from our servers.</p></li>
                </ol>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Disclaimers and Limitation of Liability</h2>
                <p className="text-gray-600">[Sign Language Translator] is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We disclaim all warranties and conditions of any kind, whether express or implied.</p>
                <p className="text-gray-600">We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our service.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Changes to Terms and Conditions</h2>
                <p className="text-gray-600">We reserve the right to modify or replace these Terms and Conditions at any time.</p>

                <h2 className={`${k2d2.className} text-gray-500 font-bold text-2xl mt-8 mb-2`}>Contact Us</h2>
                <p className="text-gray-600">If you have any questions about these Terms and Conditions, please contact us at cmak34@my.centennialcollege.ca.</p>

                <p className="text-center text-blue-800 mt-10">
                    <Link href="/">back</Link>
                </p>
            </div>
        </main>
    );
};

export default TermPage;
