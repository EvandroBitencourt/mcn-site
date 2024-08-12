"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {
    Autoplay,
    EffectFade,
    Parallax,
    Navigation,
} from "swiper/modules";
import Image from 'next/image';
import { HomeProps } from '@/utils/home.type';


export function Carousel({ object }: HomeProps) {

    return (
        <>
            <Swiper
                modules={[Autoplay, EffectFade, Parallax, Navigation]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    480: { slidesPerView: 2, spaceBetween: 30 },
                    640: { slidesPerView: 3, spaceBetween: 40 },
                    992: { slidesPerView: 4, spaceBetween: 30 },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
            >
                {object.metadata.slider?.map((banner) => (
                    <SwiperSlide key={banner.text}>
                        <Image src={banner.image.url} alt={banner.text} width={1920} height={600} />
                    </SwiperSlide>
                ))}


            </Swiper >

        </>
    )
}