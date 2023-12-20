import Banner from '../../components/banner/Banner';
import FurniCate from './furni-category/FurniCate';
import './home.css'
import LocationStatus from './location/LocationStatus';
import Other from './other/Other';
import ServiceFeature from './service feature/ServiceFeature';

const Home = () => {
    return (
        <div>
            <div className='relative text-white'>
                <Banner />
            </div>
            <FurniCate />
            <LocationStatus />
            <Other />
            <ServiceFeature />
        </div>
    );
};

export default Home;