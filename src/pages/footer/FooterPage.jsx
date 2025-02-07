import { Link } from "react-router-dom";
import Logo from "../../components/header/logo/Logo";
import Container from "../../shared/container/Container";
import { MdCall, MdOutlineMail, MdWhatsapp } from "react-icons/md";


const FooterPage = () => {

    return (
        <footer className="bg-black mt-12 p-3 md:p-10">
            <Container>
                <div className="footer  text-gray-300 flex flex-wrap justify-between pb-10">
                    <div className="w-full md:w-[270px] flex items-center md:items-start text-center md:text-start flex-col">
                        <Logo />
                        <p className="text-sm text-gray-400">Furni-Track streamlines furniture shopping with easy browsing and real-time order tracking.</p>
                    </div>
                    <nav>
                        <header className="text-xl font-bold !text-white">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="text-xl font-bold !text-white">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="text-xl font-bold !text-white">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <header className="text-xl font-bold !text-white">Contact us</header>
                        <Link to="mailto:sushil500530@gmail.com" target="_blank" className="link link-hover flex items-center gap-2">
                            <MdOutlineMail size={22} />
                            sushil500530@gmail.com</Link>
                        <Link to="https://wa.me/8801767122497" target="_blank" className="link link-hover flex items-center gap-2">
                            <MdWhatsapp size={22} />
                            +8801767122497</Link>
                        <Link to="tel:+8801767122497" target="_blank" className="link link-hover flex items-center gap-2">
                            <MdCall size={22} />
                            +8801767122497</Link>
                    </nav>
                </div>
            </Container>
        </footer>
    );
};

export default FooterPage;