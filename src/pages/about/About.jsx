import Container from "../../shared/container/Container";
import FooterPage from "../footer/FooterPage";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";


const About = () => {
    const data =  [
        {
          "name": "Sushil Hemrom",
          "role": "CEO || Administrator",
          "image": "https://i.ibb.co/WfPnV0V/sushil-bg.png",
          "details": "The CEO leads the company, makes major decisions, sets goals, and represents it to stakeholders. Administrators handle day-to-day operations, manage administrative tasks, and ensure the organization runs smoothly.",
          "rating": 4.6
        },
        {
          "name": "Proshanta Roy",
          "role": "Co-Founder",
          "image": "https://i.ibb.co/C05qsq4/proshanta.jpg",
          "details": "A Co-Founder is a key initiator and contributor to the establishment and success of a company, sharing the vision and responsibility for its development and growth alongside other founders.",
          "rating": 4.7
        },
        {
          "name": "Shamim Hassan",
          "role": "Accounting",
          "image": "https://i.ibb.co/7Rt391K/shamim.jpg",
          "details": "Accounting involves the recording, summarizing, and reporting of financial transactions within an organization.Accounting tracks and reports financial transactions, providing insights into a business's financial health",
          "rating": 4.5
        },
        {
          "name": "Lotika Yani",
          "role": "Developer",
          "image": "https://i.ibb.co/M2V49sL/lotika.jpg",
          "details": "A developer designs, builds, and maintains software applications or systems, using programming languages and tools to create functional and efficient solutions.",
          "rating": 4.8
        },
        {
          "name": "Justin Stainee",
          "role": "Program Mentor",
          "image": "https://i.ibb.co/VNdq2yq/justin.jpg",
          "details": "A Program Mentor offers guidance and support to individuals or groups, aiding them in achieving their educational or skill development objectives.",
          "rating": 4.9
        },
        {
          "name": "MD Khalid Akbar",
          "role": "Social Developer",
          "image": "https://i.ibb.co/xDQ4THL/khalid.jpg",
          "details": "Crafts software to foster social connections, using digital platforms to facilitate communication, collaboration, and community engagement effectively.",
          "rating": 4.9
        },
        {
          "name": "Sonali Grill",
          "role": "Assistant Manager",
          "image": "https://i.ibb.co/tLzSjYK/sonali.jpg",
          "details": "Supports management, overseeing operations, coordinating tasks, and ensuring smooth workflow in alignment with organizational goals and objectives.",
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
                            {
                                data?.length > 0 && data.map(team =>(
                                    <div key={team.id} className="w-full h-auto bg-base-100 shadow-xl hover:bg-gradient-to-t from-[#2241b0] to-[#000000] text-black rounded-md relative mt-14 hover:text-white">
                                    <figure className="w-full relative flex items-center justify-center">
                                        <img src={team?.image} alt="image" className="w-36 h-36 rounded-full hover:border-fuchsia-500 border-4 hover:scale-110 transition ease-in-out relative -top-10" />
                                    </figure>
                                    <div className="flex items-center justify-center gap-2 -mt-5 relative">
                                        <FaFacebookF className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                        <FaInstagram className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                        <FaTwitter className="w-10 h-10 p-2 hover:-translate-y-[2px] duration-200 rounded-full shadow-md hover:border-fuchsia-500  border-2 cursor-pointer" />
                                    </div> 
                                    <div className="flex items-center justify-center gap-2 flex-col p-5 ">
                                        <h2 className="text-2xl font-bold flex items-center justify-center">{team?.name}({team?.rating}/5<MdStarRate className="text-xl relative -top-2 text-amber-600" />)</h2>
                                        <p className="relative -mt-2 font-bold text-fuchsia-500">{team?.role}</p>
                                        <p className="text-justify text-gray-500 hover:text-gray-300">{team?.details}</p>
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