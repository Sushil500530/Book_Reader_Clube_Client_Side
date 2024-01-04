import Logo from "../../components/header/logo/Logo";
import Container from "../../shared/container/Container";
import Swal from "sweetalert2";

const FooterPage = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Congrates!🎉",
            text: "Your Submissions have been submitted",
            icon: "success",
            timer:1000
          });
    }
    return (
        <footer className=" bg-gray-300 mt-12 p-10">
            <Container>
                <div className="footer text-base-content">
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
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="email" placeholder="username@site.com" className="input input-bordered join-item input-info w-full max-w-xs" />
                                <button  onClick={handleSubscribe} className="btn text-white  bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Container>
        </footer>
    );
};

export default FooterPage;