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
        </div>
    );
};

export default Home;