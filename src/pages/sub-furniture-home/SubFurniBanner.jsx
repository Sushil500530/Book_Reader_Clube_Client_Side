/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../assets/image/banner/banner-image.jpg'
import image2 from '../../assets/image/feature/banner-3.webp'
import image3 from '../../assets/image/feature/banner-4.jpg'
import image4 from '../../assets/image/feature/banner-6.jpg'


const SubFurniBanner = ({features}) => {
    // console.log(Object.keys(features).join(','), features);
    const { feature_1,feature_2,feature_3,feature_4,feature_5} = features || {} ;
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper my-swap"
            >
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={feature_1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={feature_2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={feature_3} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={feature_4} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={feature_5} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image3} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image4} alt="image-banner" />
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default SubFurniBanner;