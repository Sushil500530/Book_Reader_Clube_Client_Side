import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../../shared/container/Container";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Rating } from '@smastrom/react-rating';
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import deliver from "../../../assets/image/200w.gif"
import { FaTwitter } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";
import FooterPage from "../../footer/FooterPage";
import SubDetails from "./SubDetails";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const FurniDetails = () => {
    const data = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const navigate = useNavigate();
    const { image, category, price, title, description, thumbnail1, thumbnail2, rating, quantity, discount } = data || {};
    const discountPrice = discount / 100 * price;
    const currentPrice = Math.round((price - discountPrice).toFixed(2));
    // console.log(currentPrice);
    const buyProduct = {
        image,
        category,
        price:currentPrice,
        title,
        description,
        thumbnail1,
        thumbnail2,
        rating,
        quantity,
        discount,
        email:user?.email,
        date: new Date()
    }
    // console.log(user?.email, buyProduct);
    const handleSetData = async () => {
       try{
        console.log(user?.email, buyProduct);
        // await axiosSecure.post('',buyProduct)
        // .then(res => {
        //     console.log(res.data);
        // })
       }
        catch(error){
            toast.error(error.message)
        }
    }
    const handleBack = () => {
        return navigate(-1)
    }
    const handleFavoriteData = async () => {
       try{
        console.log(user?.email, buyProduct);
        // await axiosSecure.post('',buyProduct)
        // .then(res => {
        //     console.log(res.data);
        // })
       }
        catch(error){
            toast.error(error.message)
        }
    }

    return (
        <>
            <Container>
                <h1 className="text-3xl font-bold text-center">Details of {title}....</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full h-auto gap-8 mt-10">
                    <div>
                        <figure className="w-full h-[60vh] border">
                            <img src={image} className="w-full h-full" alt="furniture-image" />
                        </figure>
                        <div className="grid grid-cols-2 gap-5 mt-3 w-full h-[180px] md:h-[220px] lg:h-[280px]">
                            <InnerImageZoom src={thumbnail1} width={500} height={500} zoomSrc={thumbnail1} alt="furniture-image" />
                            <InnerImageZoom src={thumbnail2} width={500} height={500} zoomSrc={thumbnail2} alt="furniture-image" />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="flex items-start justify flex-col mt-5 p-5">
                        <h1 className="text-3xl font-bold text-start ">{title}</h1>
                        <p className="text-start my-3">{description}</p>
                        <div className="space-y-3">
                            <h1 className="text-start text-xl text-[#262a3c]">Price: <span className="text-black">$ {price}</span></h1>
                            <h1 className="text-start text-xl text-[#262a3c]">Discount Price: <span className="text-[#0939e8]">$ {currentPrice}</span></h1>
                            <h1 className="text-start text-xl text-[#262a3c]">Quantity: <span className="text-black">{quantity}</span> </h1>
                            <h1 className="text-start text-xl text-[#262a3c]">Category: <span className="text-black">{category}</span></h1>
                            <div>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={handleBack} className="  btn text-[17px] text-white  bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] font-medium px-4 py-2 "><span className="flex items-center gap-1 transform hover:text-blue-300 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "><FaStepBackward className="text-2xl" /> Back</span></button>
                                <button onClick={handleFavoriteData} className="btn text-[17px] text-red-600 hover:text-blue-600 font-normal border tooltip" data-tip="add favorite"><span className="flex items-center gap-1 transform rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "><MdFavorite className="text-2xl" /></span></button>
                                <button onClick={handleSetData} className="  btn text-[17px] text-white  bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] font-medium px-4 py-2  "><span className="flex items-center gap-1 transform hover:text-blue-300 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">Add to Cart <MdAddShoppingCart className="text-2xl" /></span></button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-xl font-bold text-start flex items-center gap-2">Home Delivery to Contact Us Now... <MdContactSupport className="text-2xl" /></h1>
                            <hr className="w-2/3 h-[3px] bg-[#ff0fdb] my-3" />
                            <div className="w-[100%] lg:w-[500px] h-[170px] mb-5">
                                <img src={deliver} className="w-full h-full" alt="deliver-image" />
                            </div>
                            <p className="font-bold">Mobile: +8801767122497</p>
                            <p className="font-bold">Email: sushil530@gmail.com</p>
                            <div className="divider divide-x">Or</div>
                            <div className="flex items-center gap-3">
                                <button className="btn btn-sm btn-circle btn-outline border-none flex items-center justify-center bg-green-500">
                                    <FaWhatsapp className="text-4xl hover:text-blue-600 hover:scale-110 transition" />
                                </button>
                                <button className="btn btn-sm btn-circle btn-outline border-none flex items-center justify-center bg-blue-500 text-white hover:scale-110">
                                    <FaFacebookF className="text-2xl hover:text-blue-600" />
                                </button>
                                <button className="btn btn-sm btn-circle btn-outline border-none flex items-center justify-center bg-blue-500 text-white hover:scale-110">
                                    <FaLinkedinIn className="text-2xl hover:text-blue-600" />
                                </button>
                                <button className="btn btn-sm flex items-center justify-center btn-circle btn-outline border-none bg-blue-500 text-white hover:scale-110">
                                    <FaTwitter className="text-2xl hover:text-blue-600" />
                                </button>
                                <button className="btn btn-sm flex items-center justify-center btn-circle btn-outline border-none bg-blue-500 text-white hover:scale-110">
                                    <IoIosShareAlt className="text-2xl hover:text-blue-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <SubDetails />
                <RelatedProducts />
            </Container>
            <FooterPage />
        </>
    );
};

export default FurniDetails;