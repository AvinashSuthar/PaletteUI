import React from 'react'
import Image from 'next/image'
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-background  py-6">
            <div className='w-full max-w-7xl mx-auto px-4 flex items-center justify-between  flex-col md:flex-row gap-4 mb-6  '>
                <Link href={"/"} className="flex items-center justify-center   ">
                    <Image
                        src="/ico.svg"
                        alt="PaletteUI Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <h1 className="text-2xl font-bold ml-3">PaletteUI</h1>
                </Link>
                <div className='flex  sm:items-center items-start   gap-7'>
                    <Link
                        href="/"
                        className="text-md tracking-wide text-primary hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        href="/palette"
                        className="text-md tracking-wide text-primary hover:underline"
                    >
                        Palette
                    </Link>
                    <Link
                        href="/favorites"
                        className="text-md tracking-wide text-primary hover:underline"
                    >
                        Favorites
                    </Link>
                </div>
                

            </div>
            <div className="max-w-7xl mx-auto px-4 border-t flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                    © {new Date().getFullYear()} PaletteUI
                </div>
                <div className="flex space-x-4">
                    <a href="https://avinashsuthar.in" target='_blank' className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                        Build with ❤️ and ☕ by AVINASH
                    </a>
                    <a href="https://avinashsuthar.in/contact" target='_blank' className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                        Contact Me
                    </a>
                </div>
                <div>
                    <SocialMediaIcons />
                </div>
            </div>
        </footer>
    )
}


export const socialMedia = [
    {
        id: 1,
        icon: <GithubIcon className="w-5 h-5" />,
        link: "github.avinashsuthar.in",
    },
    {
        id: 2,
        icon: <TwitterIcon className="w-5 h-5" />,
        link: "x.avinashsuthar.in",
    },
    {
        id: 3,
        icon: <LinkedinIcon className="w-5 h-5" />,
        link: "linkedin.avinashsuthar.in",
    },
    {
        id: 4,
        icon: <InstagramIcon className="w-5 h-5" />,
        link: "insta.avinashsuthar.in",
    },
];
const SocialMediaIcons = () => {
    return (
        <div className="flex items-center md:gap-3 gap-6 px-3">
            {socialMedia.map((info) => (
                <div
                    key={info.id}
                    className="w-10  mt-10 lg:mt-0 md:mt-0  h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg  hover:bg-blue-950 hover:scale-110 transition-all duration-300 ease-in-out "
                >
                    <a
                        href={
                            info.link.startsWith("http") ? info.link : `https://${info.link}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {info.icon}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Footer