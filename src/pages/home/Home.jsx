import Banner from '../../components/banner/Banner';
import FurniCate from './furni-category/FurniCate';
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='relative text-white'>
                <Banner />
            </div>
            <FurniCate />
        </div>
    );
};

export default Home;