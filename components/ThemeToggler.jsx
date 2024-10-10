'use client';

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    return <div>
        <button onClick={() =>setTheme(theme === 'dark' ? 'light' : 'dark')}
        //background button
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
            <SunIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
            <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-0 dark:scale-100'/>
        </button>
    </div>;
};

export default ThemeToggler;