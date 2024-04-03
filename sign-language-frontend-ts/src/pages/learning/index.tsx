import React from 'react';
import Image from 'next/image';
import { K2D } from "next/font/google";
import DashboardLayout from '@/components/dashboard';

const k2d = K2D({ weight: "800", subsets: ["latin"] })
const k2d2 = K2D({ weight: "400", subsets: ["latin"] })

const LearningPage = () => {
    return (
        <DashboardLayout>
            <h1 className={`${k2d.className} font-bold max-w-[600px] text-6xl text-black`}>Learning</h1>
            <h2 className={`${k2d2.className} max-w-[600px] text-2xl text-black`}>Beginner Level</h2>
            <div className="flex">
                <div className="bg-orange-500 flex-1 flex items-center rounded-md m-4 p-4">
                    <h6 className={`${k2d.className} font-bold w-1/2 text-6xl text-white text-center`}>A</h6>
                    <div className="w-1/2 flex justify-center text-left">
                        <Image src="/letter/a.png" alt="A" width={100} height={100} />
                    </div>
                </div>
                <div className="bg-orange-500 flex-1 flex items-center rounded-md m-4 p-4">
                    <h6 className={`${k2d.className} font-bold w-1/2 text-6xl text-white text-center`}>B</h6>
                    <div className="w-1/2 flex justify-center text-left">
                        <Image src="/letter/b.png" alt="B" width={100} height={100} />
                    </div>
                </div>
                <div className="bg-orange-500 flex-1 flex items-center rounded-md m-4 p-4">
                    <h6 className={`${k2d.className} font-bold w-1/2 text-6xl text-white text-center`}>C</h6>
                    <div className="w-1/2 flex justify-center text-left">
                        <Image src="/letter/c.png" alt="C" width={100} height={100} />
                    </div>
                </div>
            </div>
            <p>To be implemented</p>
        </DashboardLayout>
    );
};

export default LearningPage;