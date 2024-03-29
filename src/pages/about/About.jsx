import Container from "../../shared/container/Container";
import FooterPage from "../footer/FooterPage";
import { FaFacebookF,FaInstagram,FaTwitter  } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";


const About = () => {
    const data = [
        {
            "name": "Cozy Cabin Retreat",
            "role": "Host",
            "details": "Escape to this charming cabin nestled in the woods. Perfect for a romantic getaway or a peaceful retreat.",
            "rating": 4.8
        },
        {
            "name": "Luxury Beachfront Villa",
            "role": "Host",
            "details": "Experience the ultimate luxury in this stunning beachfront villa. Enjoy breathtaking ocean views and world-class amenities.",
            "rating": 4.9
        },
        {
            "name": "City Loft Apartment",
            "role": "Host",
            "details": "Stay in the heart of the city in this stylish loft apartment. Walk to trendy cafes, shops, and attractions.",
            "rating": 4.5
        },
        {
            "name": "Mountain Chalet",
            "role": "Host",
            "details": "Ski-in, ski-out chalet with panoramic mountain views. Ideal for outdoor enthusiasts and nature lovers.",
            "rating": 4.7
        }
    ]

    return (
        <>
            <div className="">
                <div className="flex items-center justify-center w-full h-[60vh] flex-col relative py-20">
                    <img src="https://i.ibb.co/VTmTvXt/about.jpg" alt="contact image" className="w-full h-full" />
                    <div className="absolute top-0 right-0 left-0 w-full h-full bg-black opacity-70 flex items-center justify-center pt-20"> </div>
                </div>
                <Container>
                    <div>

                        <h1 className="font-bold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">Meet Up Our Team...! </h1>
                        <div className=" w-96 bg-base-100 shadow-xl hover:bg-gradient-to-t from-[#2241b0] to-[#000000] text-black hover:text-white rounded-md">
                            <figure className="w-full h-full relative flex items-center justify-center">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="w-36 h-36 rounded-full hover:border-fuchsia-500 border-4 hover:scale-110 transition ease-in-out relative -top-10" />
                            </figure>
                            <div className="flex items-center justify-center gap-2 -mt-5 relative">
                                <FaFacebookF className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                <FaInstagram  className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                <FaTwitter  className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                            </div>
                            <div className="flex items-center justify-center gap-2 flex-col p-5">
                               <h2 className="text-2xl font-bold ">Sushil Apurbo(4/5)</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, quaerat libero, vero beatae praesentium voluptatum molestias inventore nostrum amet, ad pariatur enim. Alias facere odio recusandae, laudantium repudiandae eligendi itaque?</p>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
            <FooterPage />
        </>
    );
};

export default About;