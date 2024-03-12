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
                            My approach is rooted in prioritizing the needs and ambitions of my clients above all else. Through active listening and a collaborative mindset, I ensure that each project is tailored precisely to exceed expectations. If you're seeking a committed professional who can deliver outstanding results, I'm eager to connect. Let's embark on a journey together, exploring how we can achieve our mutual goals and bring our shared projects to fruition. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
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
                            I firmly believe in putting my clients at the center of everything I do. By truly understanding their unique needs and aspirations, I'm able to tailor my approach to ensure their success. Through transparent communication and a collaborative spirit, I strive to exceed expectations with every project. If you're looking for a dedicated partner who is committed to achieving mutual goals, I'm here to help. Let's start a conversation and explore how we can work together to bring your projects to life <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
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
                            My ethos revolves around a client-first mentality, where understanding your specific needs and objectives is paramount. Through fostering transparent communication and a spirit of collaboration, I aim not just to meet but to exceed your expectations at every turn. If you're searching for a dedicated professional who is passionate about achieving shared success, I'm eager to connect. Let's delve into your projects and aspirations together, forging a path toward mutual accomplishment. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
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
                            At the heart of my approach lies a deep commitment to understanding and prioritizing the unique requirements and aspirations of my clients. Through open dialogue and a collaborative mindset, I ensure that each project is finely crafted to not only meet but surpass expectations. If you're seeking a devoted partner who is driven by mutual success, I'm ready to engage. Let's embark on this journey together, exploring how we can turn our shared vision into reality. <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
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
                            I am dedicated to a client-centric philosophy, where your needs and goals are my top priority. Through active listening and effective collaboration, I tailor each project to exceed expectations. If you're in search of a committed professional who values mutual success, I'm here to help. Let's connect and explore how we can work together to achieve your objectives <span className="inline-block relative"><FaQuoteRight className="text-5xl text-fuchsia-600 -top-5 absolute " /></span>
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

git config --global --add safe.directory 'F:/Programing Hero/12-2023(Practice Project)/7-12-2023/furni-track project-client-side'


export default Testimonials;