import { useEffect, useState } from "react";
import useAllUsers from "../../../../hooks/useAllUsers";
import Loader from "../../../../shared/Loader";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllManagers = () => {
    const [allUsers, refetch, isLoading] = useAllUsers();
    const [allManagers, setAllMangers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
          const findManagers = allUsers?.filter(manager => manager?.role === "manager");
                setAllMangers(findManagers)
      
    }, [allUsers, allManagers])

console.log(allManagers);
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">All Managers is Comming here</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                    {
                        allManagers?.map(item =>
                            <div key={item._id} className="bg-gradient-to-b from-[#2241b0] to-[#000000] transition ease-in-out text-white text-2xl text-center w-full h-auto bg-white shadow-2xl relative rounded-md">
                                <div className="flex items-center justify-center w-full py-3">
                                    <figure className="w-24 h-24 ">
                                         <img src={item?.image} alt="love-image" className="w-full h-full rounded-full border border-purple-500" />
                                    </figure>
                                   
                                </div>
                                <h3 className="text-2xl font-bold ">{item?.title}</h3>
                                <p className='text-[17px] font-bold '>Price: $ {item?.price}</p>
                                <div className="grid grid-cols-2 gap-5 p-5">
                                    <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base"><FaShoppingCart className="text-2xl" />Add to Cart</button>
                                    <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base"><MdDelete className="text-2xl" />Delete</button>
                                </div>
                            </div>)
                    }
                </div>
        </div>
    );
};

export default AllManagers;