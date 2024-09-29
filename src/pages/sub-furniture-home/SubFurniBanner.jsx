/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import image1 from '../../assets/image/banner/banner-image.jpg'
import image2 from '../../assets/image/feature/banner-3.webp'
import image3 from '../../assets/image/feature/banner-4.jpg'
import image4 from '../../assets/image/feature/banner-6.jpg'


const SubFurniBanner = ({ features, data }) => {
    // console.log(Object.keys(features).join(','), features);
    const { feature_1, feature_2, feature_3, feature_4, feature_5 } = features || {};
    // console.log(data);

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper my-swap w-full h-[80vh]"
            >
                <SwiperSlide className='relative swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10'>
                        {/* <h1 className="font-bold text-transparent text-[3.5em] bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">{title1}</h1> */}
                    </div>
                    <img className='w-full h-full' src={feature_1 || image4} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={feature_2 || image3} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={feature_3 || image2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={feature_4 || image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={feature_5 || image4} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={image2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={image3} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <div className='bg-black absolute w-full h-full opacity-50 flex items-center justify-center flex-col gap-5 z-10 mb-10'></div>
                    <img className='w-full h-full' src={image4} alt="image-banner" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SubFurniBanner;