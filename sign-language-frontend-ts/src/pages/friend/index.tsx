import React from 'react';
import { K2D } from "next/font/google";
import { getAuth } from 'firebase/auth';
import DashboardLayout from '@/components/dashboard';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from "@/hooks/firebase";
import Image from 'next/image';

const k2d = K2D({ weight: "800", subsets: ["latin"] })
const k2d2 = K2D({ weight: "400", subsets: ["latin"] })

const FriendPage = () => {
    const auth = getAuth(app);
    const [user, _loading, _error] = useAuthState(auth);

    return (
        <DashboardLayout>
            <h1 className={`${k2d.className} font-bold max-w-[600px] text-6xl text-black`}>Friends</h1>
            <h2 className={`${k2d2.className} max-w-[600px] text-2xl text-black`}>Leader boards</h2>
            <div className="mt-20">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="flex items-center min-w-[250px]">
                            <Image src="/avator.png" alt="avator" className="w-12 h-12 rounded-full mr-3" />
                            <div>
                                <p className="font-bold">{user?.displayName} (me)</p>
                                <p className="text-gray-600">{user?.email}</p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="bg-orange-400 h-6 rounded-full" style={{ width: '120pt' }}>
                                <div className="flex justify-center items-center h-full text-white">120pt</div>
                            </div>
                        </div>
                    </div>
                    <p>To be implemented</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default FriendPage;