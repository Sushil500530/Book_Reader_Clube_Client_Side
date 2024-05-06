/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";
import { MdDescription, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RelatedCard = ({ furniture }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { _id, image, category, price, thumbnail1, thumbnail2, quantity, title, description, rating, discount } = furniture || {};
    const favoriteData = {
        image,
        category,
        price,
        title,
        description,
        thumbnail1,
        thumbnail2,
        rating,
        quantity,
        discount,
        email: user?.email,
    }
    const handleFavoriteData = async () => {
        try {
            // console.log(favoriteData);
            await axiosSecure.post('/favorites', favoriteData)
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
        <div className=" overflow-hidden bg-base-100 shadow-xl rounded-xl">
            <figure className="w-full h-[280px] relative overflow-hidden rounded-xl ">
                <Link to={`/furnitures/${_id}`}>
                    <img src={image} className="w-full h-[280px] hover:scale-105 transition-all cursor-pointer" alt="furniture-image" />
                </Link>
                <h1 className="px-3 py-1 text-white bg-red-600 rounded-md absolute right-2 top-3">{discount}% OFF</h1>
            </figure>
            <div className="p-3 flex items-center justify-between flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h1 className="card-title">$ {price}</h1>
                </div>
                <p>{description.slice(0, 50)}</p>
                <div className="card-actions flex items-center justify-between">
                    <div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="flex items-center flex-col md:flex-row lg:flex-row gap-2">
                        <button onClick={handleFavoriteData} className="btn text-[17px] text-red-600 hover:text-blue-600 font-normal tooltip" data-tip="add favorite"><span className="flex items-center gap-1 transform rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "><MdFavorite className="text-2xl" /></span></button>
                        <Link to={`/furnitures/${_id}`}>
                            <button className="  btn text-[17px] text-white  bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] font-medium px-4 py-2  "><span className="flex items-center gap-1 transform hover:text-blue-300 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                Show Details<MdDescription className="text-2xl" /></span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedCard;