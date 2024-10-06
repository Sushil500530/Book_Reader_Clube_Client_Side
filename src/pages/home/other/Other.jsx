import image1 from '../../../assets/image/feature/banner-1.png';
import image2 from '../../../assets/image/feature/banner-2.png';
import image3 from '../../../assets/image/feature/banner-3.webp';
import image4 from '../../../assets/image/feature/banner-4.jpg';
import image5 from '../../../assets/image/feature/banner-5.jpeg';
import image6 from '../../../assets/image/feature/banner-6.jpg';
import image7 from '../../../assets/image/feature/banner-7.jpg';
import image8 from '../../../assets/image/feature/banner-8.jpg';
import image9 from '../../../assets/image/feature/banner-9.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Other = () => {
    const imagesItem = [image1, image2, image3, image4, image5, image6, image7, image8, image9] || [];
    return (
        <div className='my-12 bg-color py-10 text-center text-white'>
            <h1 className='text-3xl font-bold mb-3'>Feature of Furnitures</h1>
            <p className='w-full lg:w-2/3 mx-auto px-3  text-gray-300'>{`Premium quality materials for lasting durability", "Timeless and modern design that complements any decor", "Plush cushions for ultimate comfort", "Sturdy construction ensuring stability and reliability", "Handcrafted with care to enhance the uniqueness of each piece", "Versatile pieces for flexible arrangement in your space", "Exclusive limited-time discount – Save 15% on your purchase`}</p>
            <div className='w-full md:w-[75%] h-auto mx-auto'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper h-[350px] md:h-auto"
                >
                    {
                        imagesItem?.length > 0 && imagesItem?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Other;