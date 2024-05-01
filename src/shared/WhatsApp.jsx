
const WhatsApp = () => {
    return (
        <div className="fixed bottom-0 right-0 m-5" style={{zIndex:"6", left:"initial"}}>
            {/* <a href="https://api.whatsapp.com/send?phone=919972989970" target="_blank" rel="noreferrer" className="text-white"><i className="fa-brands fa-whatsapp"></i></a> */}
            <a href="https://wa.me/01767122497?text=Hello How can I help you ?" target="_blank"></a>
            <img src="https://i.ibb.co/5RgZ8Y/Whatsapp-Logo.png" className="w-10" style={{borderRadius:"50%"}}/>
        </div>
    );
};

export default WhatsApp;