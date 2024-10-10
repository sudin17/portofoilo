'use client';

import { useState, useEffect } from "react";
//component
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();
    
    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 bg-transparent dark:bg-transparent'} sticky top-0 z-30 transition-all`}>
            <div className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* Nav */}
                        <Nav 
                            containerStyles="hidden xl:flex gap-x-8 items-center" 
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggler />
                        {/* Mobile */}
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
