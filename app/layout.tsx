'use client'

import { Poppins } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import './globals.css'
import { ThemeProvider } from './utils/ThemeProvider';
import Providers from './utils/Provider';
import { Toaster } from 'react-hot-toast';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-Poppins',
});

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-Josefin',
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
                <Providers>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        {children}
                        <Toaster position="top-center" reverseOrder={false} />
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    )
}