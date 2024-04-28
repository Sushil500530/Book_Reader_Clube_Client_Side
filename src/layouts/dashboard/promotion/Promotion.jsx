import SubDetails from "../../../pages/sub-furniture-home/furni details/SubDetails";
import createImage from '../../../assets/image/banner2.gif'
import FooterPage from "../../../pages/footer/FooterPage";
import { Link } from "react-router-dom";

const Promotion = () => {
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold text-center flex items-center gap-2 justify-center mb-8">Do You Want to Sell Your Product? Upgrade Now🎉<Link to='/dashboard/create-shop'> <button className="animate animate-pulse text-fuchsia-600">Click Here</button></Link></h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full h-[550px]">
                    <img src={createImage} className="w-full h-full" alt="image" />
                </div>
                <div>
                    <h1 className="text-3xl text-start">Show Your Benifits for Create Shop!</h1>
                    <ul className="list-disc ml-5 my-3">
                        <li>Real-Time Updates</li>
                        <li>Reduced Loss and Theft</li>
                        <li>Improved Customer Service</li>
                        <li>Data Analytics</li>
                        <li>Optimized Supply Chain</li>
                    </ul>
                    <div>
                        <h1 className="text-3xl text-start mb-3">Other Benifits</h1>
                        <ul className="list-disc ml-5">
                            <li>Seasonal Promotions</li>
                            <li>Customization Discount</li>
                            <li>Volume Purchase Discount</li>
                            <li>Upgrade Discount</li>
                            <li>Early Adopter Discount</li>
                        </ul>
                    </div>
                    <h1 className="text-3xl text-start mb-3">Summary....</h1>
                    <p>
                        Elevate your furniture business with Furni-Track! Enjoy a limited-time 20% launch discount on our cutting-edge inventory management system.
                        Boost efficiency and save with Furni-Track. Sign up for a free 14-day trial to experience seamless furniture inventory management firsthand.
                        Spring into efficiency with Furni-Track! Subscribe now and receive a special seasonal discount. Streamline your processes and maximize productivity.
                    </p>
                    <Link to='/dashboard/create-shop'> <button className="animate animate-pulse btn text-xl font-bold text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] hover:text-black ">Upgrade Now🎉</button></Link>
                </div>
            </div>
            <SubDetails />
            <FooterPage />
        </div>
    );
};

export default Promotion;