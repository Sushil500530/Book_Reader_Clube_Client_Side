import Swal from "sweetalert2";
import useFavorite from "../../../../hooks/useFavorite";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Loader from "../../../../shared/Loader";
import { useAuth } from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const FavoriteProduct = () => {
    const [favorites, refetch, isLoading] = useFavorite();
    const { user } = useAuth();
    // console.log(favorites);
    const axiosSecure = useAxiosSecure();
    const handleDelete = ({ id, title }) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/favorite/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            toast.success( `${title} has been deleted.`)
                        }
                    })
            }
        });
    }
    const buyProduct = async (data) => {
        // console.log(data);
        const buyData = {
            furniId: data?._id,
            image: data?.image,
            category: data?.category,
            price: data?.price,
            title: data?.title,
            description: data?.description,
            thumbnail1: data?.thumbnail1,
            thumbnail2: data?.thumbnail2,
            rating: data?.rating,
            quantity: data?.quantity,
            discount: data?.discount,
            email: user?.email
        }
    try {
        await axiosSecure.post('/sales', buyData)
            .then(res => {
                if (res.data?.insertedId) {
                    Swal.fire({
                        title: "Successfully",
                        text: `${data?.title} added successfully`,
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
if (isLoading) {
    return <Loader />
}
return (
    <div className="mt-12">
        <h1 className=" mt-5 mb-36 text-2xl font-bold text-center">Show Your Favorite Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10 ">
            {
                favorites?.map(item =>
                    <div key={item._id} className="hover:bg-gradient-to-b from-[#2241b0] to-[#000000] transition ease-in-out hover:text-white text-2xl text-center w-full h-[270px] bg-white shadow-2xl relative rounded-md lg:mb-20 mb-20 md:mb-20 pt-28">
                        <div className="absolute 2xl:left-[30%] xl:left-[25%] lg:left-[18%] md:left-[30%] left-[28%] -top-20 w-36 h-36 bg-black rounded-full">
                            <img src={item?.image} alt="love-image" className="w-full h-full rounded-full" /></div>
                        <h3 className="text-2xl font-bold ">{item?.title}</h3>
                        <p className='text-[17px] font-bold '>Price: $ {item?.price}</p>
                        <div className="grid grid-cols-2 gap-5 p-5">
                            <button onClick={() => buyProduct(item)} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base"><FaShoppingCart className="text-2xl" />Add to Cart</button>
                            <button onClick={() => handleDelete({ id: item?._id, title: item?.title })} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base"><MdDelete className="text-2xl" />Delete</button>
                        </div>
                    </div>)
            }
        </div>
    </div>
);
};

export default FavoriteProduct;