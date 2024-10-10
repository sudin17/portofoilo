import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return <Link href='/'>
        <Image src='/logooo.png' width={54} height={54} pritority alt=''/>
    </Link>;
};

export default Logo;