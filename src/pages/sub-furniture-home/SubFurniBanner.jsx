import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from '../../assets/image/banner/banner-image.jpg'
import image2 from '../../assets/image/banner/blue business-technology products tenders album_54688.jpg'


const SubFurniBanner = () => {
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
                    <img className='w-full h-full' src={image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image2} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image1} alt="image-banner" />
                </SwiperSlide>
                <SwiperSlide className='swap'>
                    <img className='w-full h-full' src={image2} alt="image-banner" />
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default SubFurniBanner;