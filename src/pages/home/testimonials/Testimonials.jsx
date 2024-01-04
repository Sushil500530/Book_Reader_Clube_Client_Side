import { Rating } from "@smastrom/react-rating";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Testimonials = () => {

    return (
        <div className="container mx-auto my-12">
            <h1 className="text-3xl font-bold text-center">Our Testimonials</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className=" w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/Y7RbMwr/22654-6-man-thumb.png" alt="" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Mohammodullah Alim</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className="w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/vZkCMrN/images-1.jpg" alt="testimonials-image" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Siddik Korim</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className="w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/Wp5kP4c/images-2.jpg" alt="testimonials-image" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Taslima Akter</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className="w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/VtrWMsj/istockphoto-1309328823-170667a.jpg" alt="testimonials-image" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Jhon Devid</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className="w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/JtbcgT9/istockphoto-1386479313-170667a.webp" alt="testimonials-image" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Wannar Velly</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className="w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/PG4nb4s/images-3.jpg" alt="testimonials-image" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Dalia Beith</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="slideHeight">
                    <div className=" flex flex-col items-center w-[80%] mx-auto h-auto cursor-pointer px-5 py-8 space-y-3">
                        <div className="w-[200px] h-[200px] rounded-full">
                            <img className="w-full h-full rounded-full border-2 border-fuchsia-600" src="https://i.ibb.co/Wp5kP4c/images-2.jpg" alt="testimonials-image" />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                        <h3 className="text-xl font-semibold">Sali Ahmmed</h3>
                        <div className="text-start flex items-start w-full gap-2 "> <h1 ><FaQuoteLeft className="text-5xl text-fuchsia-600 relative -mt-5 " /></h1>
                            <p className={``}>
                                I believe in a client-centric approach, always striving to understand the unique needs and goals of my clients. By fostering open communication and collaboration, I ensure that each project is tailored to meet and exceed expectations. If you are seeking a dedicated professional who can deliver, I would love to connect. Feel free to reach out, and let's explore how we can collaborate on Mutual Goals or Projects. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;