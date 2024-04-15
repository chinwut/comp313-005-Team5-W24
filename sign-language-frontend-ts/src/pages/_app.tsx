import "@/app/globals.css";
import type { AppProps } from "next/app";
import { Toaster, resolveValue } from "react-hot-toast";
import { Inter, Karla } from "next/font/google";
import { ColorModeScript, ColorModeProvider } from "@chakra-ui/color-mode";
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from "react";

const inter = Inter({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const karla = Karla({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-karla",
});

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const errorHandler = (event: any) => {
            console.error('Caught in global:', event.error);
            // Handle or log the error appropriately
            event.preventDefault(); // This prevents the default browser error handler from taking over
        };

        window.addEventListener('error', errorHandler);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('error', errorHandler);
        };
    }, []);

    return (
        <main className={`${karla.variable} ${inter.variable} font-sans`}>
            <style jsx global>{`
                html {
                    font-family: ${karla.style.fontFamily};
                }
                #headlessui-portal-root {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <ChakraProvider>
                <ColorModeProvider>
                    <ColorModeScript
                        initialColorMode="system"
                        key="chakra-ui-no-flash"
                        storageKey="chakra-ui-color-mode"
                    />
                    <Component {...pageProps} />
                    <Toaster
                        containerStyle={{
                            bottom: 40,
                            left: 20,
                            right: 20,
                        }}
                        position="bottom-center"
                        gutter={10}
                        toastOptions={{
                            duration: 2000,
                        }}
                    >
                        {(t) => (
                            <div
                                style={{
                                    opacity: t.visible ? 1 : 0,
                                    transform: t.visible
                                        ? "translatey(0)"
                                        : "translatey(0.75rem)",
                                    transition: "all .2s",
                                }}
                            >
                                {resolveValue(t.message, t)}
                            </div>
                        )}
                    </Toaster>
                </ColorModeProvider>
            </ChakraProvider>
        </main>
    );
}
