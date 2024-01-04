import { useState } from "react";
import Logo from "../../components/header/logo/Logo";
import Container from "../../shared/container/Container";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const FooterPage = () => {
    const [email, setEmail] = useState('')
    const handleSubscribe = (e) => {
        e.preventDefault();
        if(!email){
            return toast.error('Please enter Your Email')
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return  Swal.fire({
                title: "Congrates!🎉",
                text: "Your Submissions have been submitted",
                icon: "success",
                timer: 1000
            });
        }
        return  toast.error("You have entered an invalid email address!")
    }

    return (
        <footer className=" bg-gray-300 mt-12 p-10">
            <Container>
                <div className="footer text-base-content flex flex-wrap justify-between items-center">
                    <Logo />
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <header className="footer-title">Newsletter</header>
                        <fieldset className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join flex items-center flex-col md:flex-row lg:flex-row w-auto h-auto gap-5 md:gap-0 lg:gap-0">
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="username@site.com" className="input input-bordered input-info join-item w-full" required />
                                <input type="submit" onClick={handleSubscribe} className="btn text-white  bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] join-item" value='Subscribe' />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Container>
        </footer>
    );
};

export default FooterPage;