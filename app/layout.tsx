'use client'
import './globals.css';
/* import "bootstrap/dist/css/bootstrap.min.css"; */

import { Footer, LineNavbar, MobileMenu, Navbar } from './components';
import { useState } from 'react';
import { Providers } from './provider';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const openMenuMobile = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <html lang="en">
            <body className={`min-h-screen bg-dirty-white`}>
                <Providers>
                    <Navbar openMenuMobile={openMenuMobile} />
                    <LineNavbar />
                    {children}
                    <Footer />
                    <MobileMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                </Providers>
            </body>
        </html>
    );
}