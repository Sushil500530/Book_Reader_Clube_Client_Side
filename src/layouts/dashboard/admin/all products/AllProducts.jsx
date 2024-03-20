import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import useFurnitures from "../../../../hooks/useFurnitures";
import { useEffect, useState } from "react";
const AllProducts = () => {
    // const [furnitures, refetch, isLoading] = useFurnitures();
    const [furnitures, setFurnitures] = useState([]);
    const [searchFurniture, setSearchFurniture] = useState("");

    // load data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/furnitures");
                const data = await res.json();
                //    console.log(data);
                setFurnitures(data);
                // setFilteredItems(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className=" flex items-center justify-between flex-col lg:flex-row container mx-auto">
               
                    <h1 className="text-3xl text-center font-bold my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">All Products({furnitures?.length})</h1>
                <form className="  h-auto relative flex items-center gap-3">
                    <h1 className="hidden lg:block">Find Product : </h1>
                    <input type="text" name="search" className="rounded-md relative w-auto h-auto" onChange={() => setSearchFurniture(event.target.value)} id="search" placeholder="Search Here....." />
                    <BsSearch className="absolute top-2 right-2 text-xl text-black" />
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
                {
                    furnitures?.length > 0 && furnitures?.map(furniture =>
                        <div key={furniture?._id} className="bg-gradient-to-b from-[#2241b0] to-[#000000] hover:text-white text-white transition ease-in-out text-2xl text-center w-full h-auto shadow-2xl relative rounded-md mb-10 ">
                            <div className="flex items-center justify-center w-full py-3 -mt-12">
                                <figure className="w-32 h-32 ">
                                    <img src={furniture?.image} alt="love-image" className="w-full h-full rounded-full border border-purple-500 cursor-pointer hover:scale-110 transition ease-in-out duration-500" />
                                </figure>
                            </div>
                            <h3 className="text-xl">Product Name: {furniture?.title}</h3>
                            <h3 className="text-xl">Price: $ {furniture?.price}</h3>
                            <p className='text-[17px] '>Shop Name: {furniture?.shop_name ? furniture?.shop_name : "Anonymous Shop"}</p>
                            <p className='text-[17px] '>Owner Name: {furniture?.owner_name ? furniture?.owner_name : "Anonymous Owner"}</p>
                            <div className=" grid grid-cols-2 gap-5 p-5">
                                <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-black"><FaRegEye className="text-2xl" /></button>
                                <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-red-400"><MdDelete className="text-2xl" /></button>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default AllProducts;