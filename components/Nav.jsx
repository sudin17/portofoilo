import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'My Projects' },
    { path: '/contact', name: 'Contact' }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <nav className={containerStyles}>
            {links.map((link, index) => (
                <Link href={link.path} key={index} className={`${linkStyles} mx-4 relative`}>
                    {link.name}
                    {link.path === path && (
                        <motion.span
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId="underline"
                            className={underlineStyles}
                        />
                    )}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
