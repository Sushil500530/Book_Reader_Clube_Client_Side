import Swal from "sweetalert2";
import useFavorite from "../../../../hooks/useFavorite";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const FavoriteProduct = () => {
    // eslint-disable-next-line no-unused-vars
    const [favorites, refetch, isLoading] = useFavorite();
    console.log(favorites);
    const axiosSecure = useAxiosSecure();
    const handleDelete = ({ id, title }) => {
        // console.log(id,title);
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
                            Swal.fire({
                                title: "Deleted!",
                                text: `${title} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="">
            <h1 className=" mt-5 mb-36 text-2xl font-bold text-center">Sushil</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                {
                    favorites?.map(item =>
                        <div key={item._id} className="hover:bg-blue-400 text-2xl text-center w-full h-[300px] bg-white shadow-lg relative rounded-md lg:mb-20 mb-20 md:mb-20 pt-28">
                            <div className="absolute 2xl:left-[30%] xl:left-[25%] lg:left-[18%] md:left-[30%] left-[28%] -top-20 w-36 h-36 bg-black rounded-full">
                                <img src={item?.image} alt="love-image" className="w-full h-full rounded-full" /></div>
                            <h3 className="text-2xl font-bold text-black">{item?.title}</h3>
                            <button onClick={()=>handleDelete({id:item?._id,title:item?.title})} className="btn btn-info">Delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default FavoriteProduct;