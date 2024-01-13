/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";

const ShowFavorite = ({favorite,refetch}) => {
    // const [sales,refetch] = useSale();
    console.log(favorite);
    const axiosSecure = useAxiosSecure();
    const handleDelete = (id) => {
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
                                text: `${favorite?.title} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
        <div className='grid grid-cols-3 justify-between items-center gap-3'>
            <figure className='flex flex-col items-center justify-center mt-2 w-full h-24'>
                <img src={favorite?.image} className='w-full h-full' alt="sale-image" />
            </figure>
            <div className='flex flex-col items-center justify-center gap-1'>
                <h1>{favorite?.title}</h1>
                <p className='text-[17px] font-bold '>Price: $ {favorite?.price}</p>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <button onClick={() => handleDelete(favorite?._id)} className='btn btn-sm bg-red-600  text-white hover:text-black'><MdDelete className='text-3xl p-1' /></button>
            </div>
        </div>
    </div>
    );
};

export default ShowFavorite;