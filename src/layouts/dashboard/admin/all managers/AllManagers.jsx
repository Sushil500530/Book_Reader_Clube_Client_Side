import useAllManagers from "../../../../hooks/useAllManagers";
import Loader from "../../../../shared/Loader";
import { MdDelete } from "react-icons/md";
import { IoFlowerOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import ManagerModal from "./ManagerModal";

const AllManagers = () => {
    const [managers, refetch, isLoading] = useAllManagers();
    const axiosSecure = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false);
    refetch();
    function openModal() {
        setIsOpen(true)
    }

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
                    .then(res => {
                        if (res?.data?.deletedCount > 0)
                            console.log(res);
                        toast.success('Removed successfully!');
                    })
                refetch();
            }
        });
    }


    if (isLoading) {
        return <Loader />
    }
// console.log(managers);
    return (
        <div>
            <ManagerModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <h1 className="text-3xl text-center my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">Promotion is Comming here Soon!</h1>
            </ManagerModal>
            <h1 className="text-3xl text-center my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">All Managers({managers?.length})</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-5 mt-12">
                {
                    managers?.map(item =>
                        <div key={item._id} className="bg-color transition ease-in-out text-white text-2xl text-center w-full h-auto bg-white shadow-2xl relative rounded-md ">
                            <div className="flex items-center justify-center w-full py-3 -mt-12">
                                <figure className="w-24 h-24 ">
                                    <img src={item?.shop_logo} alt="love-image" className="w-full h-full rounded-full border border-purple-500" />
                                </figure>   
                            </div>
                            <h3 className="text-xl">Name: {item?.owner}</h3>
                            <p className='text-[17px] '>Shop Name: {item?.shop_name}</p>
                            <p className='text-[17px] '>Address: {item?.location}</p>
                            <div className="flex items-center gap-5 p-5">
                                <button onClick={openModal} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-max flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-black">
                                    <IoFlowerOutline size={18} />Promotional</button>
                                <button onClick={() => handleRemove(item?._id)} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-max flex items-center justify-center gap-3 border-none outline-none text-sm text-white hover:text-red-400">
                                    <MdDelete size={32} /></button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllManagers;