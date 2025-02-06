import { useState } from "react";
import Logo from "../../components/header/logo/Logo";
import Container from "../../shared/container/Container";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const FooterPage = () => {
    const [email, setEmail] = useState('')
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            return toast.error('Please enter Your Email')
        }
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return Swal.fire({
                title: "Congrates!🎉",
                text: "Your Submissions have been submitted",
                icon: "success",
                timer: 1000
            });
        }
        return toast.error("You have entered an invalid email address!")
    }

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
                    <form>
                        <header className="text-xl font-bold !text-white">Newsletter</header>
                        <fieldset className="form-control">
                            <label className="label">
                                <span className="label-text text-white">
                                    Enter your email address
                                </span>
                            </label>
                            <div className="join flex items-center flex-row md:flex-row lg:flex-row w-full h-auto gap-0">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="username@site.com"
                                    className="input text-black input-bordered input-info join-item w-full"
                                    required
                                />
                                <input
                                    type="submit"
                                    onClick={handleSubscribe}
                                    className="btn custom-bg-color join-item text-white"
                                    value='Subscribe'
                                />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Container>
        </footer>
    );
};

export default FooterPage;