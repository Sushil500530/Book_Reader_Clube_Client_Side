import Banner from '../../components/banner/Banner';
import './home.css'
const Home = () => {
    return (
        <div>
            <div className='relative text-white'>
                <Banner />
            </div>
            <div className='w-full min-h-screen'>

            </div>
            <h1 className="text-xl font-bold text-center text-fuchsia-500">This is Home page</h1>
        </div>
    );
};

export default Home;