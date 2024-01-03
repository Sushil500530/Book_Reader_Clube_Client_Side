import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import useFurnitures from '../../hooks/useFurnitures';
import { Link } from 'react-router-dom';
import { MdDescription } from "react-icons/md";
import Loader from '../../shared/Loader';

const ShowOther = () => {
  const [furnitures,refetch,isLoading] = useFurnitures();
  // console.log(furnitures);
  if(isLoading){
    refetch()
    return <Loader />
  }
    return (
        <div className='container mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, FreeMode]}
          className="mySwiper oooer"
          slidesPerView={3}
          freeMode={true}
        >
          {
            furnitures?.length > 0 && furnitures?.map(furni => 
              <SwiperSlide key={furni?._id}>
                <div className='relative'>
                  <figure className='w-full h-[350px]'>
                   <img src={furni?.image} className='w-full h-full rounded-md hover:scale-105 transition-all cursor-pointer' alt="furniture-image" />
                  </figure>
                  <h1 className='absolute left-10 w-1/2 h-auto mx-auto text-center bottom-10 text-3xl font-bold text-blue-800 translate-x-20'>
                    {furni?.title} <br />
                     <Link to={`furni-details/${furni?._id}`}>
                    <button className='text-base bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] outline-none border-none text-white btn btn-sm mt-3'>View <span><MdDescription /></span></button>
                       </Link>
                    </h1>
                </div>
              </SwiperSlide>
            )
          }
      </Swiper>
        </div>
    );
};

export default ShowOther;