import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="h2 max-w-xl text-center mb-8">
                        Prepared to turn your ideas into reality? I'm here to help
                    </h2>
                    <Link href='/contact'>
                        <Button className='flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full font-semibold border border-transparent hover:bg-primary/80 transition w-full h-full'>Contact Me</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;