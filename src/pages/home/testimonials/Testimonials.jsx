import { Rating } from "@smastrom/react-rating";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReactStars from 'react-rating-stars-component';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import 'swiper/css';
import 'swiper/css/navigation';

// import { Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {
    //     <Rating
    //     style={{ maxWidth: 120 }}
    //     value={5}
    //     readOnly
    // />
    const testimonialsData = [
        {
            "name": "Mohammodullah Alim",
            "image": "https://i.ibb.co/Y7RbMwr/22654-6-man-thumb.png",
            "testimonial": "I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects.",
            "rating": 5,
            "role": "Market Manager"
        },
        {
            "name": "Siddik Korim",
            "image": "https://i.ibb.co/vZkCMrN/images-1.jpg",
            "testimonial": "My approach is rooted in prioritizing the needs and ambitions of my clients above all else. Through active listening and a collaborative mindset, I ensure that each project is tailored precisely to exceed expectations. If you're seeking a committed professional who can deliver outstanding results, I'm eager to connect. Let's embark on a journey together, exploring how we can achieve our mutual goals and bring our shared projects to fruition.",
            "rating": 4,
            "role": "Project Manager"
        },
        {
            "name": "Taslima Akter",
            "image": "https://i.ibb.co/Wp5kP4c/images-2.jpg",
            "testimonial": "I firmly believe in putting my clients at the center of everything I do. By truly understanding their unique needs and aspirations, I'm able to tailor my approach to ensure their success. Through transparent communication and a collaborative spirit, I strive to exceed expectations with every project. If you're looking for a dedicated partner who is committed to achieving mutual goals, I'm here to help. Let's start a conversation and explore how we can work together to bring your projects to life.",
            "rating": 5,
            "role": "Client Success Manager"
        },
        {
            "name": "Jhon Devid",
            "image": "https://i.ibb.co/VtrWMsj/istockphoto-1309328823-170667a.jpg",
            "testimonial": "I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects.",
            "rating": 4.5,
            "role": "Sales Manager"
        },
        {
            "name": "Wannar Velly",
            "image": "https://i.ibb.co/JtbcgT9/istockphoto-1386479313-170667a.webp",
            "testimonial": "My ethos revolves around a client-first mentality, where understanding your specific needs and objectives is paramount. Through fostering transparent communication and a spirit of collaboration, I aim not just to meet but to exceed your expectations at every turn. If you're searching for a dedicated professional who is passionate about achieving shared success, I'm eager to connect. Let's delve into your projects and aspirations together, forging a path toward mutual accomplishment.",
            "rating": 4,
            "role": "Operations Manager"
        },
        {
            "name": "Dalia Beith",
            "image": "https://i.ibb.co/PG4nb4s/images-3.jpg",
            "testimonial": "At the heart of my approach lies a deep commitment to understanding and prioritizing the unique requirements and aspirations of my clients. Through open dialogue and a collaborative mindset, I ensure that each project is finely crafted to not only meet but surpass expectations. If you're seeking a devoted partner who is driven by mutual success, I'm ready to engage. Let's embark on this journey together, exploring how we can turn our shared vision into reality.",
            "rating": 5,
            "role": "Marketing Strategist"
        },
        {
            "name": "Sali Ahmmed",
            "image": "https://i.ibb.co/Wp5kP4c/images-2.jpg",
            "testimonial": "I am dedicated to a client-centric philosophy, where your needs and goals are my top priority. Through active listening and effective collaboration, I tailor each project to exceed expectations. If you're in search of a committed professional who values mutual success, I'm here to help. Let's connect and explore how we can work together to achieve your objectives.",
            "rating": 4.5,
            "role": "Business Development Manager"
        }
    ]

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-3xl font-bold text-center">Our Testimonials</h1>
            <p className="text-gray-500 text-base text-center my-5">Our testimonials reflect client satisfaction and our commitment to understanding their needs. Through open communication  <br /> and collaboration, we consistently exceed expectations and build lasting partnerships.</p>
            <div className="relative w-[95%] h-screen lg:w-11/12 mx-auto">
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 4000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper h-[800px]"
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial?.id} className='overflow-visible z-0 '>
                            <div className="w-full h-auto md:h-[430px] bg-white  hover:bg-gradient-to-b from-[#2241b0] to-[#000000] [transition:0.5s] ease-in-out group text-black p-2 md:p-8 rounded-md relative">
                                {/* Profile Image - Positioned Absolutely */}
                                <div className="flex items-center justify-start flex-col md:flex-row gap-5 w-full h-full">
                                    <div className="md:w-64 h-full">
                                        <img
                                            src={testimonial?.image}
                                            alt="profile-image"
                                            className="w-full h-full rounded-md border-4 border-white shadow-lg "
                                        />
                                    </div>
                                    <div className="flex items-center justify-start gap-2 flex-1 flex-col z-10">
                                        <div className='absolute right-5 bottom-0 text-gray-700 -z-10'>
                                            <BiSolidQuoteAltRight size={80} />
                                        </div>
                                        {/* Content inside card */}

                                        <div className="flex items-center justify-start flex-col text-center ">
                                            <h1 className="text-2xl font-bold text-black mb-2 group-hover:text-white">{testimonial?.name}</h1>
                                            <p className="text-base font-semibold text-gray-700 group-hover:text-gray-300">{testimonial?.role}</p>
                                            <ReactStars
                                                count={5}
                                                value={testimonial?.rating}
                                                size={28}
                                                edit={false}
                                                isHalf={true}
                                                activeColor="#ff6b00"
                                            />
                                        </div>
                                        <p className="font-normal text-gray-600 mt-3 mb-7 text-sm text-justify group-hover:text-gray-400">
                                            {testimonial?.testimonial}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;