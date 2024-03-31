import { MdLocationPin,MdLocalPhone ,MdEmail } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";



const Contact = () => {
    return (
        <div>

            <div className="flex items-center justify-center w-full h-[60vh] flex-col relative py-20">
                <img src="https://i.ibb.co/4NcsDvW/contact.jpg" alt="contact image" className="w-full h-full" />
                <div className="absolute top-0 right-0 left-0 w-full h-full bg-black opacity-30 flex items-center justify-center pt-20"> </div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-col lg:flex-row-reverse p-5">
                <div className="w-full h-full lg:w-[35%] space-y-4 text-start flex items-start justify-center flex-col">
                    <h1 className=" my-5 font-bold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">Contact Us</h1>
                    <div className="flex items-center justify-center gap-6">
                        <h1><MdLocationPin className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" /></h1>
                        <div>
                            <h1>Furni-Track LTD,</h1>
                            <small>Dinajpur, Bangladesh</small>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <h1><MdLocalPhone className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" /></h1>
                        <div>
                            <h1>+8801767-122497</h1>
                            <h1>+8801859-011700</h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <h1><MdEmail className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" /></h1>
                        <h1>sushil500530@gmail.com</h1>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <h1><BsStopwatch className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" /></h1>
                        <h1>Monday - Friday 9:00 - 21:00</h1>
                    </div>
                </div>
                <div className="w-full h-full lg:w-[65%] ">
                    <h1 className="font-bold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">Send A Message</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;