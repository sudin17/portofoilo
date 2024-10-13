import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Sudin',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+62 81703372315',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'lgfc8080@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 17 January 2004',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master on Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Indonesia',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Institut Bisnis dan Teknologi Indonesia',
                qualification: 'Bachelor of Sciense',
                years: '2022-2026',
            },
            {
                university: 'Man 1 Lombok Tengah',
                qualification: 'Bachelor of Sciense',
                years: '2019-2022',
            },
        ],
    },
    {
        title: 'project',
        data: [
            {
                projectName: 'Sistem Informasi Rekam Medis Elektronik',
                qualification: 'Klinik Medishina',
                years: ' Agustus 2024',
            },
            {
                university: 'Sistem Informasi SMP N 2 Blahbatuh',
                qualification: 'SMP Negri 2 Blahbatuh',
                years: ' july 2024',
            },
        ],
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Wordpress Developer',
            },
            {
                name: 'Website Developer',
            },
            {
                name: 'PHP & Java Scrip',
            },
            {
                name: 'Laravel, next js, tailwind css',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me
            </h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
                </div>
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px]'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualification</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto'value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>
                                <div className="px-10 md:px-0 text-center xl:text-left">
                                    <h3 className="h3 mb-4">Unmatched service quality for over 2 years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                        i spesialize in crafting intuitivewebsites with cutting-edge technology, delivering dynamic and engaging user experiance.
                                    </p>
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index) => {
                                            return (
                                                <div 
                                                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualification'>qualification info</TabsContent>
                            <TabsContent value='skills'>skills info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>;
};

export default About;