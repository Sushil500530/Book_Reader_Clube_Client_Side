
const SimpleMap = () => {
    return (
        <div className="w-full h-[350px] lg:h-[70vh] p-4 lg:p-0 shadow">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.66557373126!2d88.60259647600107!3d25.62222001688214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb529bc7fc909b%3A0xd8f861ed9baf24de!2sDinajpur!5e0!3m2!1sen!2sbd!4v1738939975910!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default SimpleMap;