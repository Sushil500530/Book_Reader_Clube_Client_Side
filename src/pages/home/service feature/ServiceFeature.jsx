
// import image from '../../../assets/image/feature/banner-1.png'
import { Parallax, } from 'react-parallax';
import { Link } from 'react-router-dom';

const ServiceFeature = () => {
    return (
        <div>
            <div className="my-20 text-center ">
                <div data-aos="fade-up">
                    <h1 className="text-3xl font-bold ">
                        Service Furnitures Feature
                    </h1>
                    <p className="w-full lg:w-[1020px] mx-auto mb-8 p-5">
                        Furniture refers to objects intended to support various human activities such as seating or stools, chairs, and sofas, eating, storing items, working, and sleeping . Furniture is also used to hold objects at a convenient height for work or to store things . Furniture can be a product of design and can be considered a form of decorative art.
                    </p>
                </div>

                <div>
                    <Parallax
                        blur={{ min: -50, max: 50 }}
                        bgImage='https://i.ibb.co/Ky6L4KG/furniture.jpg'
                        bgImageAlt="the menu"
                        strength={-200}
                        Radius={100}
                    >
                        <div className=" h-[100vh] lg:h-[90vh] hero" >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="w-full md:w-3/5">
                                    <h1 className="mb-5 text-5xl font-bold uppercase  text-gray-100">
                                        Furniture
                                    </h1>
                                    <p className="mb-5 text-base font-medium  text-gray-200">
                                        Furniture refers to objects intended to support various human activities such as seating or stools, chairs, and sofas, eating, storing items, working, and sleeping .
                                    </p>
                                    <Link to='/all-shop'>
                                        <button className="btn custom-bg-color border-none px-8 text-white  hover:text-gray-200 transition ease-in-out text-[18px]">
                                            Get Started
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeature;