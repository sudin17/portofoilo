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
        path: 'https://www.instagram.com/sudinnn_17',
        name: <RiInstagramFill />
    },
    {
        path: 'https://www.linkedin.com/in/syamsuddin-25bab5270',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/sudin17',
        name: <RiGithubFill />
    },
    {
        path: 'https://web.facebook.com/profile.php?id=100020448042297&locale=id_ID',
        name: <RiFacebookFill />
    },
    {
        path: 'https://wa.me/089669750498',
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
