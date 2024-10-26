'use client'

import Image from "next/image"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const reviewData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'James Mitchell',
        job: 'Freelance Photographer',
        review: 'Sudin created an outstanding portfolio landing page for me. The design is professional and showcases my work beautifully. His skills and approach in understanding my needs were exactly what I was looking for.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Emily Carter',
        job: 'Marketing Executive, Acardia Resto Ubud',
        review: 'Sudin expertise was evident in the way he optimized our restaurant’s website. The result is a beautifully designed site that not only looks great but also functions seamlessly, attracting more visitors and online reservations.'
    },
    {
        avatar: '/reviews/pfp.jpeg',
        name: 'Dimas Ardianto',
        job: 'Online Store Manager',
        review: 'We were highly impressed with Sudin expertise in building our e-commerce site. The modern design and smooth functionality improved the user experience. Highly recommended!'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Maria ',
        job: 'Digital Marketing Specialist',
        review: 'The SEO work done by Syamsuddin really helped our website gain more organic traffic. He’s meticulous and consistently provides updates on the progress.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Ricard',
        job: 'Furniture Store Owner',
        review: "Working with Syamsuddin was amazing! He professionally built our business landing page, and it's highly responsive, which boosted our conversions. His service was very friendly and communicative."
    },
];

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {slidesPerView: 2},
                    1400: {slidesPerView: 3},
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable: true,}}
                className="h-[350px]"
                >
                    {reviewData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className="flex items-center gap-x-4">
                                            <Image
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt=""
                                            priority
                                            />
                                            <div className="flex flex-col">
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews