import useAllManagers from "../../../../hooks/useAllManagers";
import Loader from "../../../../shared/Loader";
import { MdDelete } from "react-icons/md";
import { IoFlowerOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllManagers = () => {
    const [managers, refetch, isLoading] = useAllManagers();
    const axiosSecure = useAxiosSecure();
    refetch();


    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/manager-delete/${id}`)
                .then(res=> {
                    if(res?.data?.deletedCount > 0)
                    console.log(res);
                      toast.success('Removed successfully!');
                })
                refetch();
            }
        });
        console.log(id);
    }


    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">All Managers is Comming here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
                {
                    managers?.map(item =>
                        <div key={item._id} className="bg-gradient-to-b from-[#2241b0] to-[#000000] transition ease-in-out text-white text-2xl text-center w-full h-auto bg-white shadow-2xl relative rounded-md ">
                            <div className="flex items-center justify-center w-full py-3 -mt-12">
                                <figure className="w-24 h-24 ">
                                    <img src={item?.shop_logo} alt="love-image" className="w-full h-full rounded-full border border-purple-500" />
                                </figure>
                            </div>
                            <h3 className="text-xl">Name: {item?.owner}</h3>
                            <p className='text-[17px] '>Shop Name: {item?.shop_name}</p>
                            <p className='text-[17px] '>Address: {item?.location}</p>
                            <div className="grid grid-cols-2 gap-5 p-5">
                                <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-black"><IoFlowerOutline className="text-2xl" />Promotional</button>
                                <button onClick={() => handleRemove(item?._id)} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-red-400"><MdDelete className="text-2xl" />Remove</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllManagers;