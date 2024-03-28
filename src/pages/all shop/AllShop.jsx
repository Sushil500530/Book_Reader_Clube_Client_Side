import Container from "../../shared/container/Container";
import { FaSearch } from "react-icons/fa";
import useFurnitures from './../../hooks/useFurnitures';
import useFurCategory from "../../hooks/useFurCategory";
import { useEffect, useState } from "react";
import Loader from "../../shared/Loader";


const AllShop = () => {
    const [furnitures, refetch, isLoading] = useFurnitures();
    const [currentFurnitures, setCurrentFurnitures] = useState([]);
    const [category, ,] = useFurCategory();
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    
    refetch();
    useEffect(() => {
        const findData = furnitures?.filter(furniture => furniture?.title.toLowerCase().includes(searchValue.toLowerCase()));
        setCurrentFurnitures(findData);
        if (filterValue) {
            const filteredData = findData?.filter(furniture => furniture?.category === filterValue);
            setCurrentFurnitures(filteredData);
        }
        if(filterValue ==='all-products'){
           setCurrentFurnitures(furnitures)
        }
    }, [furnitures, searchValue, filterValue]);

    if(isLoading){
        return <Loader />
    }

    return (
        <Container>
            <div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row w-11/12 md:w-2/3 lg:w-1/2 mx-auto gap-5">
                    <div className="w-full relative">
                        <input type="text" name="search" onChange={() => setSearchValue(event.target.value)} className="w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 " placeholder="search your product here....." />
                        <FaSearch className="text-2xl absolute top-3  right-2" />
                    </div>
                    <select onChange={() => setFilterValue(event.target.value)} className="input-bordered w-[60%] lg:w-1/3 px-4 py-3 text-gray-800 border rounded-md border-blue-400 ">
                        <option selected disabled>Filter By Category</option>
                        <option value='all-products'>All Product</option>
                        {
                            category?.length > 0 && category.map(categ => <option key={categ?._id} required>
                                {categ?.category}
                            </option>)
                        }
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
                    {
                        currentFurnitures?.length > 0 && currentFurnitures?.map(furniture =>
                            <div key={furniture?._id} className="bg-gradient-to-b from-[#2241b0] to-[#000000] text-white transition ease-in-out text-2xl text-center w-full h-auto shadow-2xl relative rounded-md mb-10 ">
                                <div className="flex items-center justify-center w-full py-3 -mt-12">
                                    <figure className="w-32 h-32 ">
                                        <img src={furniture?.image} alt="love-image" className="w-full h-full rounded-full border border-purple-500 cursor-pointer hover:scale-110 transition ease-in-out duration-500" />
                                    </figure>
                                </div>
                                <h3 className="text-xl">Product Name: {furniture?.title}</h3>
                                <h3 className="text-xl">Price: $ {furniture?.price}</h3>
                                <p className='text-[17px] '>Shop Name: {furniture?.shop_name ? furniture?.shop_name : "Anonymous Shop"}</p>
                                <p className='text-xl '>Shop Name: {furniture?.category}</p>
                                <p className='text-[17px] '>Owner Name: {furniture?.owner_name ? furniture?.owner_name : "Anonymous Owner"}</p>
                                <div className=" grid grid-cols-2 gap-5 p-5">
                                    <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-blue-600">View Details</button>
                                    <button className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] w-full flex items-center justify-center gap-3 border-none outline-none text-base text-white hover:text-red-400">Add to Cart</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllShop;