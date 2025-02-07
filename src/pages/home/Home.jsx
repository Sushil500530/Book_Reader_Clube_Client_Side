import Banner from '../../components/banner/Banner';
import WhatsApp from '../../shared/WhatsApp';
import MessengerChat from '../../shared/socialAccount/MessengerChat';
import FooterPage from '../footer/FooterPage';
import NewsLetter from '../news-letter/NewsLetter';
import SomeDetails from '../some/SomeDetails';
import Features from './features/Features';
import FurniCate from './furni-category/FurniCate';
import './home.css'
import LocationStatus from './location/LocationStatus';
import ServiceFeature from './service feature/ServiceFeature';
import Testimonials from './testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div className='relative text-white'>
                <Banner />
            </div>
            <FurniCate />
            <LocationStatus />
            <Features />
            <SomeDetails />
            <ServiceFeature />
            <Testimonials />
            <NewsLetter />
            <FooterPage />
            <MessengerChat />
            <WhatsApp />
        </div>
    );
};

export default Home;