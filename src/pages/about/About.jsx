import FooterPage from "../footer/FooterPage";

const About = () => {
    return (
        <>
            <div className="">
                <div className="flex items-center justify-center w-full h-[60vh] flex-col relative py-20">
                    <img src="https://i.ibb.co/VTmTvXt/about.jpg" alt="contact image" className="w-full h-full" />
                    <div className="absolute top-0 right-0 left-0 w-full h-full bg-black opacity-70"></div>
                </div>
            </div>
            <FooterPage />
        </>
    );
};

export default About;