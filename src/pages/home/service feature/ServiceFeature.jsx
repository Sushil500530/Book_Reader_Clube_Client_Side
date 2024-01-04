
import image from '../../../assets/image/feature/banner-1.png'
import { Parallax, } from 'react-parallax';

const ServiceFeature = () => {
    return (
        <div>
            <div className="my-20 text-center ">
                <h1 className="text-3xl font-bold ">Service Furnitures Feature</h1>
                <p className="w-full lg:w-2/3 mx-auto mt-3 mb-8 p-5">Furniture refers to objects intended to support various human activities such as seating or stools, chairs, and sofas, eating, storing items, working, and sleeping . Furniture is also used to hold objects at a convenient height for work or to store things . Furniture can be a product of design and can be considered a form of decorative art.</p>
                <div>
                    <Parallax
                        blur={{ min: -50, max: 50 }}
                        bgImage={image}
                        bgImageAlt="the menu"
                        strength={-200}
                        Radius={100}
                    >
                        <div className=" h-[60vh] lg:h-[80vh] hero" >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="w-3/5">
                                    <h1 className="mb-5 text-5xl font-bold uppercase">Furniture</h1>
                                    <p className="mb-5 text-base font-semibold">Furniture refers to objects intended to support various human activities such as seating or stools, chairs, and sofas, eating, storing items, working, and sleeping .</p>
                                    <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] border-none px-8 hover:text-white transition ease-in-out text-[18px]">Get Started</button>
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