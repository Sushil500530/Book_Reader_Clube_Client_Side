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


const Features = () => {
    const imagesItem = [image1, image2, image3, image4, image5, image6, image7, image8, image9] || [];
    return (
        <div
            style={{
                background: `url('https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-contemporary-home-interiors-3d-render-of-modern-living-and-kitchen-furniture-image_3877173.jpg') center/cover no-repeat`,
            }}
            className='text-center text-white w-full h-auto py-10 lg:py-14  relative flex flex-col items-center justify-center'>
            <div className='absolute w-full h-full bg-black/80'></div>
            <h1 data-aos="fade-up" className='text-3xl font-bold mb-3'>Feature of Furnitures</h1>
            <p data-aos="fade-up" className='w-full lg:w-2/3 mx-auto px-3  text-gray-300'>
                Made from premium materials for durability, this timeless design blends with any decor. Plush cushions ensure comfort, sturdy construction adds reliability, and handcrafted details offer unique charm. Save 15% now with our limited-time offer!
            </p>
            <div className='w-full md:w-[75%] h-auto mx-auto'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={1}
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
                                <img src={image} className='rounded' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Features;