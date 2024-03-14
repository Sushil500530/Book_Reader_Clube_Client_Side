import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import useFurnitures from "../../../../hooks/useFurnitures";
import Loader from "../../../../shared/Loader";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const MyProduct = () => {
    const [furnitures, refetch, isLoading] = useFurnitures();
    const { user } = useAuth();
    const [myProducts, setMyProducts] = useState([]);
    refetch();

    useEffect(() => {
        const findProduct = furnitures?.filter(item => item?.email === user?.email);
        setMyProducts(findProduct);
    }, [furnitures, user?.email]);
    // console.log(myProducts);
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">My Product {myProducts?.length} is Comming Here Soon!🎉❗❗❗🎉</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-10 gap-5">
                {
                    myProducts?.length > 0 && myProducts?.map(item => <div key={item?._id} className="bg-white shadow-xl p-5 rounded">
                        <figure className="w-full h-[220px] relative">
                            <img src={item?.image} className="w-full h-full rounded-xl hover:scale-105 transition-all cursor-pointer" alt="furniture-image" />
                        </figure>
                        <div className="mt-5">
                            <h1 className="text-start font-bold">{item?.product_name}</h1>
                            <p>{item?.description?.slice(0,50)}......</p>
                            <div className="flex items-center justify-between pt-5 gap-5">
                                <button className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] font-medium hover:text-red-500"><AiFillDelete className="text-3xl" /></button>
                                <button className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] font-medium hover:text-blue-500"><FaRegEye className="text-3xl" /></button>
                                <button className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] font-medium hover:text-blue-500"><FiEdit className="text-3xl" /></button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default MyProduct;