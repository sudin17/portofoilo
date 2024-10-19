'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'wordpress',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum ',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit quae eaque?',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col xl:justify-start xl:items-start justify-center items-center">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, maiores.</p>
                    <Link href='/project'>
                        <Button className='flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full font-semibold border border-transparent hover:bg-primary/80 transition w-full h-full'>All project</Button>
                    </Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper 
                    className='h-[580px]'
                    slidesPerView={1}
                    breakpoints={{640: {
                        slidesPerView: 2
                    }}}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{clickable:true}}
                    >
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project}/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default Work;