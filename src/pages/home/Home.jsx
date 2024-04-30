import Banner from '../../components/banner/Banner';
import FooterPage from '../footer/FooterPage';
import NewsLetter from '../news-letter/NewsLetter';
import SomeDetails from '../some/SomeDetails';
import FurniCate from './furni-category/FurniCate';
import './home.css'
import LocationStatus from './location/LocationStatus';
import Other from './other/Other';
import ServiceFeature from './service feature/ServiceFeature';
import Testimonials from './testimonials/Testimonials';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    return (
        <div>
            <div className='relative text-white'>
                <Banner />
            </div>
            <FurniCate />
            <LocationStatus />
            <Other />
            <SomeDetails />
            <ServiceFeature />
            <Testimonials />
            <NewsLetter />
            <FooterPage />
            <MessengerCustomerChat
                pageId="2655250701318445"
                appId="132608119925178"
            />
        </div>
    );
};

export default Home;