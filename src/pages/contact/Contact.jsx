
const Contact = () => {
    return (
        <div>
            {/* <h1 className="font-bold text-transparent text-2xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center">Touch To Us</h1> */}
            <div className="flex items-center justify-center w-full h-[60vh] flex-col relative py-20">
                <img src="https://i.ibb.co/4NcsDvW/contact.jpg" alt="contact image" className="w-full h-full" />
                <div className="absolute top-0 right-0 left-0 w-full h-full bg-black opacity-30 flex items-center justify-center pt-20"> </div>
            </div>
        </div>
    );
};

export default Contact;