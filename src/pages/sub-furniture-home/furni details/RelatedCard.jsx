/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import { MdDescription, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const RelatedCard = ({furniture}) => {
    const { _id, image, price, title, description, rating, discount } = furniture || {};
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="w-full h-[350px] relative">
            <Link to={`/furnitures/${_id}`}>
                <img src={image} className="w-full h-full rounded-xl hover:scale-110 transition-all cursor-pointer" alt="furniture-image" />
            </Link>
            <h1 className="px-5 py-2 text-white bg-red-600 rounded-md absolute right-2 top-2">{discount}% OFF</h1>
        </figure>
        <div className="card-body">
            <div className="flex items-center justify-between">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h1 className="card-title">$ {price}</h1>
            </div>
            <p>{description.slice(0, 70)}</p>
            <div className="card-actions flex items-center justify-between">
                <div>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button className="btn text-[17px] text-red-600 hover:text-blue-600 font-normal tooltip" data-tip="add favorite"><span className="flex items-center gap-1 transform rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 "><MdFavorite className="text-2xl" /></span></button>
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