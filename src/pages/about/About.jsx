import Container from "../../shared/container/Container";
import FooterPage from "../footer/FooterPage";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";


const About = () => {
    const data = [
        {
            "id":1,
            "name": "Cozy Cabin Retreat",
            "role": "Host",
            "details": "Escape to this charming cabin nestled in the woods. Perfect for a romantic getaway or a peaceful retreat.",
            "rating": 4.8
        },
        {
            "id":2,
            "name": "Luxury Beachfront Villa",
            "role": "Host",
            "details": "Experience the ultimate luxury in this stunning beachfront villa. Enjoy breathtaking ocean views and world-class amenities.",
            "rating": 4.9
        },
        {
            "id":3,
            "name": "City Loft Apartment",
            "role": "Host",
            "details": "Stay in the heart of the city in this stylish loft apartment. Walk to trendy cafes, shops, and attractions.",
            "rating": 4.5
        },
        {
            "id":4,
            "name": "Mountain Chalet",
            "role": "Host",
            "details": "Ski-in, ski-out chalet with panoramic mountain views. Ideal for outdoor enthusiasts and nature lovers.",
            "rating": 4.7
        },
        {
            "id":1,
            "name": "Cozy Cabin Retreat",
            "role": "Host",
            "details": "Escape to this charming cabin nestled in the woods. Perfect for a romantic getaway or a peaceful retreat.",
            "rating": 4.8
        },
        {
            "id":2,
            "name": "Luxury Beachfront Villa",
            "role": "Host",
            "details": "Experience the ultimate luxury in this stunning beachfront villa. Enjoy breathtaking ocean views and world-class amenities.",
            "rating": 4.9
        },
        {
            "id":3,
            "name": "City Loft Apartment",
            "role": "Host",
            "details": "Stay in the heart of the city in this stylish loft apartment. Walk to trendy cafes, shops, and attractions.",
            "rating": 4.5
        },
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
                            {
                                data?.length > 0 && data.map(team =>(
                                    <div key={team.id} className="w-full h-auto bg-base-100 shadow-xl hover:bg-gradient-to-t from-[#2241b0] to-[#000000] text-black hover:text-white rounded-md relative mt-14">
                                    <figure className="w-full relative flex items-center justify-center">
                                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="image" className="w-36 h-36 rounded-full hover:border-fuchsia-500 border-4 hover:scale-110 transition ease-in-out relative -top-10" />
                                    </figure>
                                    <div className="flex items-center justify-center gap-2 -mt-5 relative">
                                        <FaFacebookF className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                        <FaInstagram className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                        <FaTwitter className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                    </div>
                                    <div className="flex items-center justify-center gap-2 flex-col p-5">
                                        <h2 className="text-2xl font-bold flex items-center justify-center">Sushil Apurbo({team?.rating}/5<MdStarRate className="text-xl relative -top-2 text-amber-600" />)</h2>
                                        <p className="relative -mt-2 font-bold text-fuchsia-500">CEO || Co-Founder</p>
                                        <p>{team?.details}</p>
                                    </div>
                                </div>
                                ))
                          }

                        </div>

                    </div>
                </Container>

            </div>
            <FooterPage />
        </>
    );
};

export default About;