import React from 'react';
import { K2D } from "next/font/google";
import DashboardLayout from '@/components/dashboard';

const k2d = K2D({ weight: "800", subsets: ["latin"] })
const k2d2 = K2D({ weight: "400", subsets: ["latin"] })

const PracticePage = () => {
    return (
        <DashboardLayout>
            <h1 className={`${k2d.className} font-bold max-w-[600px] text-6xl text-black`}>Practice</h1>
            <p>To be implemented</p>
        </DashboardLayout>
    );
};

export default PracticePage;
