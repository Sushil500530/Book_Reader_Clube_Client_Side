import Container from "../../shared/container/Container";
import { FaSearch, FaRegEye, FaShoppingCart } from "react-icons/fa";
import useFurnitures from './../../hooks/useFurnitures';
import useFurCategory from "../../hooks/useFurCategory";
import { useEffect, useState } from "react";
import Loader from "../../shared/Loader";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";



const AllShop = () => {
    const [furnitures, refetch, isLoading] = useFurnitures();
    const [currentFurnitures, setCurrentFurnitures] = useState([]);
    const [category, ,] = useFurCategory();
    const { user } = useAuth();
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
        if (filterValue === 'all-products') {
            setCurrentFurnitures(furnitures)
        }
    }, [furnitures, searchValue, filterValue]);

    if (isLoading) {
        return <Loader />
    }


    const handleSetData = async (data) => {
        console.log(data);
        const discountPrice = data?.discount / 100 * parseFloat(data?.price);
        const currentPrice = Math.round((data?.price - discountPrice).toFixed(2));
      
        const buyProduct = {
            furniId: data?._id,
            image: data?.image,
            category: data?.image,
            price: currentPrice,
            title: data?.title,
            description: data?.description,
            thumbnail1: data?.thumbnail1,
            thumbnail2: data?.thumbnail2,
            rating: data?.rating,
            quantity: data?.quantity,
            discount: data?.discount,
            email: user?.email
        }
          console.log(buyProduct);
        // try {
        //     // console.log(user?.email, buyProduct);
        //     await axiosSecure.post('/sales', buyProduct)
        //         .then(res => {
        //             if (res.data?.insertedId) {
        //                 Swal.fire({
        //                     title: "Successfully",
        //                     text: `${title} added successfully`,
        //                     icon: "success",
        //                     timer: 1500
        //                 });
        //                 refetch();
        //             }
        //         })
        // }
        // catch (error) {
        //     toast.error(error.message)
        // }
    }




    return (
        <Container>
            <div>
                <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row w-11/12 md:w-2/3 lg:w-1/2 mx-auto gap-5">
                    <div className="w-full relative">
                        <input type="text" name="search" onChange={() => setSearchValue(event.target.value)} className="w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 " placeholder="search your product here....." />
                        <FaSearch className="text-2xl absolute top-3  right-2" />
                    </div>
                    <select onChange={() => setFilterValue(event.target.value)} defaultValue={category} className="input-bordered w-[60%] lg:w-1/3 px-4 py-3 text-gray-800 border rounded-md border-blue-400 ">
                        <option selected disabled>Filter By Category</option>
                        <option value='all-products'>All Product</option>
                        {
                            category?.length > 0 && category.map(categ => <option key={categ?._id} required>
                                {categ?.category}
                            </option>)
                        }
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-20 lg:p-0 p-5">
                    {
                        currentFurnitures?.length > 0 && currentFurnitures?.map(furniture =>
                            <div key={furniture?._id} className="bg-gradient-to-b from-[#2241b0] to-[#000000] text-white transition ease-in-out w-full h-auto shadow-2xl relative rounded-md mb-10">
                                <div className="flex items-center justify-center w-full py-3 -mt-12">
                                    <figure className="w-40 h-40 ">
                                        <img src={furniture?.image} alt="love-image" className="w-full h-full rounded-full border border-purple-500 cursor-pointer hover:scale-110 transition ease-in-out duration-500" />
                                    </figure>
                                </div>
                                <div className="px-5 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl">{furniture?.title}</h3>
                                        <h3 className="text-xl text-fuchsia-500">Price: $ {furniture?.price}</h3>
                                    </div>
                                    <p className="text-gray-300">{furniture?.description?.length > 90 ? furniture?.description?.slice(0, 90) + "...." : furniture?.description}</p>
                                    <p className='text-[17px] '>Category: {furniture?.category}</p>
                                    <h1 className='text-[17px] bg-fuchsia-500 px-3 py-1 w-[120px] rounded-full'>{furniture?.discount} % OFF</h1>
                                    <div className=" flex items-center md:justify-center lg:justify-between gap-3 w-full py-5 flex-col md:flex-row lg:flex-row">
                                        <Link to={`/furni-details/${furniture?._id}`} className="w-full md:w-1/2 lg:1/2 lg:px-2 lg:py-3 lg:btn-none bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] flex items-center justify-center border-none outline-none text-sm rounded-md btn text-white hover:text-blue-600">
                                            <FaRegEye /> View Details
                                        </Link>
                                        <button onClick={() => handleSetData(furniture)} className="w-full md:w-1/2 lg:1/2 lg:px-2 lg:py-3 lg:btn-none bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] flex items-center justify-center border-none outline-none text-sm rounded-md btn text-white hover:text-red-400"><FaShoppingCart /> Add to Cart</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllShop;