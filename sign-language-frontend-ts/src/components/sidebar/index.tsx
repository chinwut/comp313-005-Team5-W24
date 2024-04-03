import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getAuth } from 'firebase/auth';
import app from "@/hooks/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

type SidebarProps = {
    isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
    const auth = getAuth(app);
    const [user, _loading, _error] = useAuthState(auth);
    const router = useRouter()
    const isActive = (pathname: string) => router.pathname === pathname
    const links = [
        {
            href: "/learning",
            label: "Learning",
            svg: "M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        },
        {
            href: "/practice",
            label: "Practice",
            svg: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
        },
        {
            href: "/friend",
            label: "Friend",
            svg: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        }
    ]

    return (
        <div className={`${(isOpen) ? 'w-[300px]' : 'w-0'} bg-orange-500 transition-all ease-in-out duration-300`}>
            <div className="p-4">
                <Image className="mt-10 mx-auto max-w-full" src="/logo-full.png" alt="Logo" width={400} height={140} />
                <div className="mt-8">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className={`text-white mb-2 rounded-md block p-2 px-4 font-medium ${isActive(link.href) ? 'bg-orange-400' : ''} hover:bg-orange-400 transition-all duration-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d={link.svg} />
                            </svg>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="sidebar-clap mt-[300px]"></div>
                <div className="user mb-3">
                    <Link href="/profile">
                        <div className={`p-2 rounded-xl ${isActive("/profile") ? 'bg-orange-400' : 'bg-orange-600'} hover:bg-orange-400 transition-all duration-300`}>
                            <div className="flex items-center justify-start">
                                <div className="relative w-10 h-10">
                                    <Image className="rounded-full object-cover bg-orange-600" src='/avator.png' fill alt="Avatar" />
                                    <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="ml-4 mr-4 max-w-[120px]">
                                    <div className="text-orange-200 ">
                                        {user?.displayName}
                                    </div>
                                    <div className="text-orange-200 text-sm text-ellipsis text-nowrap overflow-hidden">
                                        {user?.email}
                                    </div>
                                </div>
                                <div className="self-start px-2 py-2 bg-green-500 text-white rounded-md text-xs">
                                    120pt
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
