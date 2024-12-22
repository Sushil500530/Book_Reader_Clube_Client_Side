import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import FooterPage from "../footer/FooterPage";
import SimpleMap from "./map/SimpleMap";



const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        // const form = e.target;
        // const fullName = form.full_name.value;
        // const email = form.email.value;
        // const message = form.message.value;
        // console.log(fullName, email, message);
    }
    return (
        <div>
            <div className="flex items-center justify-center w-full h-[60vh] flex-col relative">
                <img
                    src="https://i.ibb.co/4NcsDvW/contact.jpg"
                    alt="contact image"
                    className="w-full h-full"
                />
                <div className="absolute top-0 right-0 left-0 w-full h-full bg-black opacity-30 flex items-center justify-center"> </div>
            </div>
            <div className="flex items-start justify-center gap-6 flex-col lg:flex-row-reverse p-5 w-[90%] mx-auto mt-14 mb-32">
                <div data-aos="fade-left" className="w-full h-full lg:w-[35%] space-y-4 text-start flex items-center justify-center lg:items-start lg:justify-center flex-col">
                    <h1 className=" my-5 font-bold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">
                        Contact Us
                    </h1>
                    <div className="flex items-center justify-center gap-6">
                        <h1>
                            <MdLocationPin className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" />
                        </h1>
                        <div>
                            <h1>
                                Furni-Track LTD,
                            </h1>
                            <small>
                                Dinajpur, Bangladesh
                            </small>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <h1>
                            <MdLocalPhone className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" />
                        </h1>
                        <div>
                            <h1>
                                +8801767-122497
                            </h1>
                            <h1>
                                +8801859-011700
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <h1>
                            <MdEmail className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" />
                        </h1>
                        <h1>
                            sushil500530@gmail.com
                        </h1>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <h1>
                            <BsStopwatch className="p-3 w-12 h-12 bg-white shadow-lg rounded-full" />
                        </h1>
                        <h1>
                            Monday - Friday 9:00 - 21:00
                        </h1>
                    </div>
                </div>
                <div className="w-full h-full lg:w-[65%] "  data-aos="fade-up">
                    <h1 className="mt-5 mb-12 font-bold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">
                        Send A Message
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 dark:text-white w-full lg:w-2/3 mx-auto'>
                            <div className='space-y-6'>
                                <div className='flex flex-col md:flex-row lg:flex-row gap-4 items-center justify-center'>
                                    <div className='space-y-2 w-full'>
                                        <label className='block text-black font-medium dark:text-white'>
                                            Full Name *
                                        </label>
                                        <input
                                            className=' w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 '
                                            name='full_name'
                                            id='full_name'
                                            type='text'
                                            placeholder='enter your full name...'
                                            required
                                        />
                                    </div>
                                    <div className='space-y-1 w-full'>
                                        <label className='block text-black font-medium dark:text-white'>
                                            Email *
                                        </label>
                                        <input className='w-full px-4 py-3 text-gray-800 border rounded-md  border-blue-400 '
                                            name='email'
                                            id='email'
                                            type='text'
                                            placeholder='enter your email...'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='space-y-1 '>
                                    <label
                                        htmlFor='description'
                                        className='block font-medium'
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id='message'
                                        className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md  border-blue-400 '
                                        name='message'
                                        placeholder="write message..."
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn w-full p-3 mt-5 text-[18px] text-center font-medium hover:text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-black '
                            >
                                {loading ? (
                                    <span className='flex items-center justify-center gap-3'>
                                        <FaSpinner className='m-auto animate-spin' size={24} />
                                        Processing....
                                    </span>
                                ) : (
                                    'Send'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <SimpleMap />
            <FooterPage />
        </div>
    );
};

export default Contact;