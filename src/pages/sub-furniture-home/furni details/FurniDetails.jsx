import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../../shared/container/Container";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Rating } from '@smastrom/react-rating';
import deliver from "../../../assets/image/200w.gif"
import { } from "react-icons/fa";
import { FaStepBackward, FaFacebook, FaTwitter, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdContactSupport, MdAddShoppingCart, MdFavorite } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";
import FooterPage from "../../footer/FooterPage";
import SubDetails from "./SubDetails";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useSale from "../../../hooks/useSale";


const FurniDetails = () => {
    const data = useLoaderData();
    const [, refetch,] = useSale();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const { _id, image, category, price, title, description, thumbnail1, thumbnail2, rating, quantity, discount } = data || {};
    const discountPrice = discount / 100 * price;
    const currentPrice = Math.round((price - discountPrice).toFixed(2));
    // console.log(currentPrice);
    const buyProduct = {
        furniId: _id,
        image,
        category,
        price: currentPrice,
        title,
        description,
        thumbnail1,
        thumbnail2,
        rating,
        quantity,
        discount,
        email: user?.email,
        userName: user?.displayName
    }
    // console.log(user?.email, buyProduct);
    const handleSetData = async () => {
        try {
            // console.log(user?.email, buyProduct);
            await axiosSecure.post('/sales', buyProduct)
                .then(res => {
                    if (res.data?.insertedId) {
                        Swal.fire({
                            title: "Successfully",
                            text: `${title} added successfully`,
                            icon: "success",
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    const handleBack = () => {
        return navigate(-1)
    }
    const handleFavoriteData = async () => {
        try {
            await axiosSecure.post('/favorites', buyProduct)
                .then(res => {
                    if (res.data?.insertedId) {
                        toast.success('added successfully')
                    }
                })
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <Container>
                <h1 className="text-3xl font-bold text-center mt-10 text_gradient">
                    Details of {title}....
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full h-auto gap-8 mt-10">
                    <div className="m-3 lg:m-0">
                        <figure data-aos="fade-right" className="w-full h-[80vh] border">
                            <img src={image} className="w-full h-full" alt="furniture-image" />
                        </figure>
                        <div className="grid grid-cols-2 gap-3 mt-3 w-full h-[180px] md:h-[220px] lg:h-[280px]">
                            <span data-aos="flip-up">
                                <InnerImageZoom
                                    src={thumbnail1}
                                    width={500}
                                    height={500}
                                    zoomSrc={thumbnail1}
                                    className="w-full h-full"
                                    alt="furniture-image"
                                   
                                />
                            </span>
                            
                            <InnerImageZoom
                                src={thumbnail2}
                                width={500}
                                height={500}
                                zoomSrc={thumbnail2}
                                className="w-full h-full"
                                alt="furniture-image"
                                data-aos="flip-up"
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex items-start justify flex-col mt-5 p-3 md:p-5">
                        <h1 className="text-3xl font-bold text-start ">
                            {title}
                        </h1>
                        <p className="text-start my-3">
                            {description}
                        </p>
                        <div className="space-y-3">
                            <h1 className="text-start text-xl text-[#262a3c]">
                                Price:
                                <span className="text-black line-through">
                                    $ {price}
                                </span>
                            </h1>
                            <h1 className="text-start text-xl text-[#262a3c]">
                                Discount Price:
                                <span className="text-[#0939e8]">
                                    $ {currentPrice}
                                </span>
                            </h1>
                            <h1 className="text-start text-xl text-[#262a3c]">
                                Quantity:
                                <span className="text-black">
                                    {quantity}
                                </span>
                            </h1>
                            <h1 className="text-start text-xl text-[#262a3c]">
                                Category:
                                <span className="text-black">
                                    {category}
                                </span>
                            </h1>
                            <div>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleBack}
                                    className="  btn md:text-[17px] text-white custom-bg-color border-none font-medium px-4 py-2 ">
                                    <span className="flex items-center gap-1 transform hover:text-blue-300 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                        <FaStepBackward className=" text-xl md:text-2xl" />
                                        Back
                                    </span>
                                </button>
                                <button
                                    onClick={handleFavoriteData}
                                    className="btn text-[17px] text-red-600 hover:text-blue-600 font-normal border tooltip"
                                    data-tip="add favorite">
                                    <span className="flex items-center gap-1 transform rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                        <MdFavorite className="text-xl md:text-2xl" />
                                    </span>
                                </button>
                                <button
                                    onClick={handleSetData}
                                    className=" btn md:text-[17px] text-white custom-bg-color border-none font-medium px-4 py-2  ">
                                    <span className="flex items-center gap-1 transform hover:text-blue-300 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                        Add to Cart
                                        <MdAddShoppingCart className="text-xl md:text-2xl" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-xl font-bold text-start flex items-center gap-2">
                                Home Delivery to Contact Us Now...
                                <MdContactSupport className="text-2xl" />
                            </h1>
                            <hr className="w-2/3 h-[3px] bg-[#ff0fdb] my-3" />
                            <div className="w-[100%] lg:w-[500px] h-[170px] mb-5">
                                <img
                                    src={deliver}
                                    className="w-full h-full"
                                    alt="deliver-image"
                                />
                            </div>
                            <p className="font-bold">
                                Mobile: +8801767122497
                            </p>
                            <p className="font-bold">
                                Email: sushil530@gmail.com
                            </p>
                            <div className="divider divide-x">Or</div>
                            <div className="flex items-center gap-3">
                                <FaWhatsapp className="social-icons" />
                                <FaFacebook className="social-icons" />
                                <FaLinkedinIn className="social-icons" />
                                <FaTwitter className="social-icons" />
                                <IoIosShareAlt className="social-icons" />
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