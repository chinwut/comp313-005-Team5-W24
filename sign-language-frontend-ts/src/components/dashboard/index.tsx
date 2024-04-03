import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Sidebar from "../sidebar";
import { getAuth } from 'firebase/auth';
import app from "@/hooks/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const auth = getAuth(app);

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [expand, setExpand] = useState(true);
    const [user, loading, _error] = useAuthState(auth);
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/');
        }
    }, [user, loading, router]);

    return (
        <main className="flex min-h-screen w-full">
            <Sidebar isOpen={expand} />
            <div className="flex-grow bg-orange-100 text-gray-600 relative">
                <div className="absolute top-0 left-0">
                    <button onClick={() => { setExpand(!expand) }} type="button" className="w-full rounded-br-md bg-orange-500 text-white  px-4 py-2 hover:bg-orange-700  focus:bg-orange-700 focus:text-white transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                            {(expand) ? (<path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />) : (<path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />)}
                        </svg>
                    </button>
                </div>
                <div className="px-20 py-10">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;
