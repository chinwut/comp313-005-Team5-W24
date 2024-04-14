    import React, { useState } from 'react';
    import Image from 'next/image';
    import { K2D } from "next/font/google";
    import DashboardLayout from '@/components/dashboard';
    import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'

    const k2d = K2D({ weight: "800", subsets: ["latin"] })
    const k2d2 = K2D({ weight: "400", subsets: ["latin"] })
    

    const LearningPage = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [video, setVideo] = useState("")

        const handleOpen = (text: string) => (event: React.MouseEvent<HTMLDivElement>) => {
            setVideo(text)
            onOpen()
        }

        return (
            <DashboardLayout>
                <h1 className={`${k2d.className} font-bold max-w-[600px] text-6xl text-black`}>Learning</h1>
                <h2 className={`${k2d2.className} max-w-[600px] text-2xl text-black`}>Beginner Level</h2>
                <div className="flex">
                    <div className="bg-orange-500 cursor-pointer h-[200px] flex-1 flex items-center rounded-md m-4 p-4">
                        <h6 className={`${k2d.className} font-bold w-1/2 text-6xl text-white text-center`}>A</h6>
                        <div className="w-1/2 flex justify-center text-left">
                            <Image src="/letter/a.png" alt="A" width={100} height={100} />
                        </div>
                    </div>
                    <div className="bg-orange-500 cursor-pointer h-[200px] flex-1 flex items-center rounded-md m-4 p-4">
                        <h6 className={`${k2d.className} font-bold w-1/2 text-6xl text-white text-center`}>B</h6>
                        <div className="w-1/2 flex justify-center text-left">
                            <Image src="/letter/b.png" alt="B" width={100} height={100} />
                        </div>
                    </div>
                    <div className="bg-orange-500 cursor-pointer h-[200px] flex-1 flex items-center rounded-md m-4 p-4">
                        <h6 className={`${k2d.className} font-bold w-1/2 text-6xl text-white text-center`}>C</h6>
                        <div className="w-1/2 flex justify-center text-left">
                            <Image src="/letter/c.png" alt="C" width={100} height={100} />
                        </div>
                    </div>
                </div>
                <h2 className={`${k2d2.className} max-w-[600px] text-2xl text-black`}>Intermediate Level</h2>
                <div className="flex">
                    <div onClick={handleOpen('hello')} className="bg-red-500 cursor-pointer h-[200px] flex-1 flex items-center rounded-md m-4 p-4">
                        <h6 className={`${k2d.className} font-bold text-6xl text-white text-center`}>Hello</h6>
                    </div>
                    <div onClick={handleOpen('thankyou')} className="bg-red-500 cursor-pointer h-[200px] flex-1 flex items-center rounded-md m-4 p-4">
                        <h6 className={`${k2d.className} font-bold text-6xl text-white text-center`}>Thank you</h6>
                    </div>
                    <div onClick={handleOpen('goodbye')} className="bg-red-500 cursor-pointer h-[200px] flex-1 flex items-center rounded-md m-4 p-4">
                        <h6 className={`${k2d.className} font-bold text-6xl text-white text-center`}>Goodbye</h6>
                    </div>
                </div>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <video src={`/${video}.mp4`} className="h-full w-full" autoPlay loop muted></video>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </DashboardLayout>


        );
    };

    export default LearningPage;