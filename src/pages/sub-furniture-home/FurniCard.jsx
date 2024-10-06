/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { MdDescription } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const FurniCard = ({ furniture }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    // console.log(Object.keys(furniture).join(','));
    const { _id, image, price, title, description, rating, discount, category, quantity, thumbnail1, thumbnail2, } = furniture || {};

    const favorite = {
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
        date: new Date()
    }
    const handleFavorite = async () => {
        if (!user?.email) {
            return Swal.fire({
                title: "Pleaase Login first",
                text: "Do you want to login?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, i does it"
            }).then((result) => {
                if (result.isConfirmed) {
                    return navigate('/login')
                }
            });
        }
        else {
            try {
                // console.log(user?.email, buyProduct);
                await axiosSecure.post('/favorites', favorite)
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
    }

    return (
        <div className="card bg-white shadow-xl">
            <Link to={`/furni-details/${_id}`}>
                <figure className="w-full h-42 md:h-[350px] relative rounded-xl">
                    <img src={image} className="w-full h-full rounded-xl hover:scale-105 [transition:0.5s] cursor-pointer" alt="furniture-image" />
                    <h1 className="px-5 py-2 text-white bg-red-600 rounded-md absolute right-2 top-2">{discount}% OFF</h1>
                </figure>
            </Link>
            <div className="md:card-body px-3 py-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm md:text-2xl font-bold">
                        {
                            title?.length > 16 ? <>{title?.slice(0, 16) + "..."}</> : <>{title}</>
                        }
                        <div className="badge badge-secondary ml-5">NEW</div>
                    </h2>
                    <h1 className="text-sm md:text-2xl font-bold">$ {price}</h1>
                </div>
                <p className="text-[12px] md:text-base">{description.slice(0, 70)}</p>
                <div className="card-actions flex items-center justify-between">
                    <div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleFavorite(_id)}
                            className="btn text-[17px] border-none custom-bg-color text-red-600 hover:text-blue-600 font-normal tooltip"
                            data-tip="add favorite">
                            <span className="flex items-center gap-1 transform rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                <MdFavorite className="text-2xl" />
                            </span></button>
                        <Link to={`/furni-details/${_id}`}>
                            <button className="border-none btn text-sm md:text-[17px] text-white custom-bg-color font-medium px-4 py-2  ">
                                <span className="flex items-center gap-1 transform hover:text-blue-300 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                                    Show Details<MdDescription className="text-2xl" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FurniCard;