import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReactStars from 'react-rating-stars-component';
import { BiSolidQuoteAltRight } from "react-icons/bi";
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {

    const testimonialsData = [
        {
            "name": "Mohammodullah Alim",
            "image": "https://i.ibb.co/Y7RbMwr/22654-6-man-thumb.png",
            "testimonial": "With a client-first mindset, I focus on understanding unique goals and providing customized solutions. Through clear communication and collaboration, I ensure successful project execution that exceeds expectations. I'm open to connecting and discussing potential collaborations to achieve shared success.",
            "rating": 5,
            "role": "Market Manager"
        },
        {
            "name": "Siddik Korim",
            "image": "https://i.ibb.co/vZkCMrN/images-1.jpg",
            "testimonial": "I prioritize understanding my clients' ambitions to provide tailored solutions that deliver impactful results. By fostering open collaboration and strategic planning, I help achieve shared goals. Let's connect and explore ways to bring your ideas to life.",
            "rating": 4,
            "role": "Project Manager"
        },
        {
            "name": "Taslima Akter",
            "image": "https://i.ibb.co/Wp5kP4c/images-2.jpg",
            "testimonial": "I am committed to delivering client-focused solutions that drive success. Through transparent communication and a personalized approach, I ensure every project meets and exceeds expectations. Let's collaborate and create meaningful results together.",
            "rating": 5,
            "role": "Client Success Manager"
        },
        {
            "name": "Jhon Devid",
            "image": "https://i.ibb.co/VtrWMsj/istockphoto-1309328823-170667a.jpg",
            "testimonial": "My focus is on delivering value-driven solutions through collaboration and a deep understanding of client needs. I aim to exceed expectations by offering strategic insights and tailored execution. Let's connect and discuss how we can achieve success together.",
            "rating": 4.5,
            "role": "Sales Manager"
        },
        {
            "name": "Wannar Velly",
            "image": "https://i.ibb.co/JtbcgT9/istockphoto-1386479313-170667a.webp",
            "testimonial": "I am dedicated to delivering operational excellence by understanding and aligning with client needs. Through clear communication and teamwork, I ensure seamless execution and successful outcomes. Let's work together to achieve our mutual objectives.",
            "rating": 4,
            "role": "Operations Manager"
        },
        {
            "name": "Dalia Beith",
            "image": "https://i.ibb.co/PG4nb4s/images-3.jpg",
            "testimonial": "I am passionate about crafting marketing strategies that resonate with client goals and objectives. Through collaboration and strategic insight, I help businesses achieve their vision and create impactful campaigns. Let's discuss how we can bring your ideas to life.",
            "rating": 5,
            "role": "Marketing Strategist"
        },
        {
            "name": "Sali Ahmmed",
            "image": "https://i.ibb.co/Wp5kP4c/images-2.jpg",
            "testimonial": "With a focus on business growth, I tailor strategies that align with client goals and deliver measurable success. Through collaboration and effective planning, I help bring ideas to fruition. Let's connect and explore opportunities for mutual success.",
            "rating": 4.5,
            "role": "Business Development Manager"
        }
    ]


    return (
        <div className="container mx-auto my-12 p-4">
            <div data-aos="fade-up">
                <h1 data-aos="fade-up" className="text-3xl font-bold text-center">
                    Our Testimonials
                </h1>
                <p data-aos="fade-up" className="text-gray-500 text-base text-center my-5 w-full lg:w-[1050px] mx-auto">
                    Our testimonials reflect client satisfaction and our commitment to understanding their needs. Through open communication  and collaboration, we consistently exceed expectations and build lasting partnerships.
                </p>
            </div>

            <div className="relative w-[95%] lg:w-11/12 mx-auto !pb-0">
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
                    className="mySwiper  md:h-auto !pb-10"
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}

                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide
                            key={testimonial?.id}
                            className='overflow-visible z-0 '
                        >
                            <div className="w-full h-auto md:h-[380px] bg-white text-black p-3 py-4 md:px-8 rounded-md relative">
                                <div className="flex items-center justify-start gap-2 flex-1 flex-col">
                                    <div className="w-20 h-20 rounded-full ">
                                        <img
                                            src={testimonial?.image}
                                            alt="profile-image"
                                            className="w-full h-full rounded-full border-4 border-white shadow-lg "
                                        />
                                    </div>
                                    <div className='absolute right-5 bottom-0 text-gray-600 z-0'>
                                        <BiSolidQuoteAltRight size={80} />
                                    </div>
                                    {/* Content inside card */}

                                    <div className="flex items-center justify-start flex-col text-center relative z-20">
                                        <h1 className="text-2xl font-bold text-black mb-2">
                                            {testimonial?.name}
                                        </h1>
                                        <p className="text-base font-semibold text-gray-700 ">
                                            {testimonial?.role}
                                        </p>
                                        <ReactStars
                                            count={5}
                                            value={testimonial?.rating}
                                            size={28}
                                            edit={false}
                                            isHalf={true}
                                            activeColor="#ff6b00"
                                        />
                                    </div>
                                    <p className="font-normal text-gray-600 mt-3 mb-7 text-sm text-justify">
                                        {testimonial?.testimonial}
                                    </p>
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