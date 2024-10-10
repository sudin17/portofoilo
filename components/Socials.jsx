'use client';

import {
    RiInstagramFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiWhatsappFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
    {
        path: '/instagram',
        name: <RiInstagramFill />
    },
    {
        path: '/linkedin',
        name: <RiLinkedinFill />
    },
    {
        path: '/github',
        name: <RiGithubFill />
    },
    {
        path: '/facebook',
        name: <RiFacebookFill />
    },
    {
        path: '/install',
        name: <RiWhatsappFill />
    },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={containerStyles}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={iconsStyles}>{icon.name}
                        </div>
                    </Link>
                );
            })}
        </div>
    )
};

export default Socials;
