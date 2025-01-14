import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import useFurnitures from "../../../../hooks/useFurnitures";
import Loader from "../../../../shared/Loader";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import MyProductModal from "./MyProductModal";
import { Link } from "react-router-dom";


const MyProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [furnitures, refetch, isLoading] = useFurnitures();
    const [myProducts, setMyProducts] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    const [findItem, setFindItem] = useState([]);

    const { user } = useAuth();


    useEffect(() => {
        refetch();
        const findProduct = furnitures?.filter(item => item?.email === user?.email);
        setMyProducts(findProduct);
    }, [furnitures,refetch, user?.email]);
    // console.log(myProducts);
    if (isLoading) {
        return <Loader />
    }

    const handleDelete = async ({ id, title }) => {
        try {
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
                    axiosPublic.delete(`/furniture-delete/${id}`)
                        .then(res => {
                            if (res.data?.insertedId) {
                                // toast.success(`${title} deleted successfully`)
                            }
                            refetch();
                            toast.success(`${title} deleted successfully`)
                        })
                }
            });
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }
    const handleShow = (idItem) => {
        openModal();
        const findData = myProducts?.find(item => item._id === idItem);
        setFindItem(findData);
    }


    return (
        <div>
            <MyProductModal isOpen={isOpen} closeModal={closeModal} findItem={findItem} />
            <h1 className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-center ">My Product({myProducts?.length})</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-10 gap-5">
                {
                    myProducts?.length > 0 && myProducts?.map(item => <div key={item?._id} className="bg-white shadow-xl p-5 rounded">
                        <figure className="w-full h-[220px] relative">
                            <img src={item?.image} className="w-full h-full rounded-xl hover:scale-105 transition-all cursor-pointer" alt="furniture-image" />
                        </figure>
                        <div className="mt-5">
                            <h1 className="text-start font-bold">{item?.title}</h1>
                            <p>{item?.description?.slice(0, 50)}......</p>
                            <div className="flex items-center justify-between pt-5 gap-5">
                                <button onClick={() => handleDelete({ id: item?._id, title: item?.product_name })} className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] hover:text-red-500"><AiFillDelete size={18} /></button>
                                <button onClick={() => handleShow(item?._id)} className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] hover:text-blue-500"><FaRegEye size={18} /></button>
                                <Link to={`/dashboard/update-product/${item?._id}`}> <button className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] hover:text-blue-500"><FiEdit size={18} /></button></Link>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default MyProduct;