import Banner from '../../components/banner/Banner';
import FurniCate from './furni-category/FurniCate';
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='relative text-white'>
                <Banner />
            </div>
            <h1 className="text-xl font-bold text-center text-fuchsia-500">Fevourite Furniture is here</h1>
            <FurniCate />
        </div>
    );
};

export default Home;