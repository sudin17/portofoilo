import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <section className="relative py-12 xl:py-24 h-[115vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row justify-between items-center gap-x-8">
                    <div className="flex flex-col max-w-[600px] justify-center text-center xl:text-left mx-auto xl:mx-0">
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Wordpress Developer</div>
                        <h1 className='h1 mb-4'>Hello, my name is Sudin</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            Brief description with insight into myself, my vocational journey, and what I engage in professionally.
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mt-4">
                            <Link href='/contact' className="w-full md:w-auto">
                                <Button className='flex items-center justify-center gap-x-2 bg-primary text-white px-6 py-3 rounded-full font-semibold border border-transparent hover:bg-primary/80 transition w-full h-full'>
                                    Contact Me <Send size={18} />
                                </Button>
                            </Link>
                            <Link href='/ai' className="w-full md:w-auto">
                                <Button className='flex items-center justify-center gap-x-2 bg-secondary text-black dark:text-white px-6 py-3 rounded-full font-semibold border border-transparent hover:bg-secondary/50 transition w-full h-full'>
                                    Download CV <Download size={18} />
                                </Button>
                            </Link>
                        </div>
                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mt-8' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
                    </div>
                        <div className='hidden xl:flex relative'>
                            <Badge 
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={1}
                            badgeText={'Years Of Experiance'}/>
                            <Badge 
                            containerStyles='absolute top-[80%] -left-[2rem] '
                            icon={<RiTodoFill />}
                            endCountNum={3}
                            endCountText='k'
                            badgeText={'Finished Peject'}/>
                            <Badge 
                            containerStyles='absolute top-[55%] -right-8'
                            icon={<RiTeamFill />}
                            endCountNum={9}
                            endCountText='k'
                            badgeText={'Happy Client'}/>
                        {/* Shape Pertama */}
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute top-0 right-0 z-10"></div>
                        {/* Shape Kedua yang menimpa Shape Pertama */}
                        <div className="bg-hero_shape w-[510px] h-[462px] bg-no-repeat absolute top-0 right-0 z-20"></div>
                        
                        {/* Gambar yang menyesuaikan ukuran Shape */}
                        <DevImg 
                            containerStyles='w-[510px] h-[462px] z-30 relative' 
                            imgSrc='/hero/remove.png'
                        />
                    </div>
                </div>
            </div>
            {/* Memposisikan Arrow Down di bawah Hero */}
            <div className="hidden md:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 bottom-8 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </section>
    );
};

export default Hero;
