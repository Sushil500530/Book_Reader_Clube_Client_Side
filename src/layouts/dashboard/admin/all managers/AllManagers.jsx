import useAllManagers from "../../../../hooks/useAllManagers";
import Loader from "../../../../shared/Loader";
import { MdDelete } from "react-icons/md";
import { IoFlowerOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import ManagerModal from "./ManagerModal";
import Button from "../../../../components/button";
import AdminTitle from "../../../../components/title";

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
                <h1 className="text-3xl text-center my-5 flex items-center justify-center gap-2 font-bold text_gradient">Promotion is Comming here Soon!</h1>
            </ManagerModal>
            <AdminTitle>
                All Managers({managers?.length})
            </AdminTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-5 mt-12">
                {
                    managers?.map(item =>
                        <div key={item._id} className="card text-center space-y-1 ">
                            <div className="flex items-center justify-center w-full py-3 -mt-12 group">
                                <figure className="w-24 h-24 group-hover:scale-110 [transition:0.5s]">
                                    <img src={item?.shop_logo} alt="love-image" className="w-full h-full rounded-full border border-purple-500" />
                                </figure>
                            </div>
                            <h3 className="text-xl"><span className="font-bold">{item?.owner || "Anonymous"}</span></h3>
                            <p className='text-[17px] '>Shop: <span className="font-medium">{item?.shop_name}</span></p>
                            <p className='text-[17px] '>Address:<span className="font-medium">{item?.location}</span></p>
                            <div className="flex items-center gap-5 p-5">
                                <Button
                                    onClick={openModal}
                                    icon={IoFlowerOutline}>
                                    Promotional
                                </Button>
                                <Button
                                    onClick={() => handleRemove(item?._id)}
                                    icon={MdDelete}
                                >
                                </Button>

                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllManagers;