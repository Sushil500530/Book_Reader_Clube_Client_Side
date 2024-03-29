import Container from "../../shared/container/Container";
import FooterPage from "../footer/FooterPage";

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
                        <div className="card w-96 bg-base-100 shadow-xl hover:bg-gradient-to-t from-[#2241b0] to-[#000000] text-black hover:text-white">
                            <figure className="w-full h-full">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="w-32 h-32 rounded-full hover:border-fuchsia-500 border-4" />
                            </figure>
                            <div className="flex items-center justify-center gap-2">
                                <span className=""></span>

                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
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