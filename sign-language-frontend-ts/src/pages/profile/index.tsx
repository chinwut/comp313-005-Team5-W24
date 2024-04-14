import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { K2D } from "next/font/google";
import DashboardLayout from '@/components/dashboard';
import { getAuth, signOut } from 'firebase/auth';
import app from "@/hooks/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toast } from '@chakra-ui/react';
import Image from 'next/image';

const k2d = K2D({ weight: "800", subsets: ["latin"] })

const ProfilePage = () => {
    const router = useRouter();
    const auth = getAuth(app);
    const [user, _loading, _error] = useAuthState(auth);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const logout = async () => {
        setIsLoggingOut(true);
        try {
            await signOut(auth)
            router.push("/")
        } catch (error: any) {
            Toast({
                title: "Error",
                description: error.message,
                status: "error",
                position: "top"
            })
        }
    }

    return (
        <DashboardLayout>
            <div className="absolute top-10 right-10">
                <button type="button" onClick={logout} className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600" disabled={isLoggingOut}>
                    {isLoggingOut ? (
                        <svg className="animate-spin w-6 h-6 inline-block mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    )}
                    Sign out
                </button>
            </div>
            <h1 className={`${k2d.className} font-bold max-w-[600px] text-6xl text-black`}>Profile</h1>
            <div>
                <div className="bg-beige-100 p-6 rounded-lg max-w-sm">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="rounded-full bg-gray-300 h-16 w-16 flex items-center justify-center overflow-hidden">
                            <Image src="/avator.png" width={16} height={16} alt="User avatar" className="w-full h-full" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
                            <p className="text-gray-700">{user?.email} ({(user?.emailVerified ? "Verified" : "Not verified")})</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <h3 className="font-semibold">Created Time</h3>
                            <p>{user?.metadata.creationTime}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Points</h3>
                            <p>120</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProfilePage;
