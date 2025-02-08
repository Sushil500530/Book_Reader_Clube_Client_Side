import Container from "../../shared/container/Container";
import { FaSearch, } from "react-icons/fa";
import useFurnitures from './../../hooks/useFurnitures';
import useFurCategory from "../../hooks/useFurCategory";
import { useEffect, useState } from "react";
import Loader from "../../shared/Loader";
import FooterPage from './../footer/FooterPage';
import FurnitureCard from "../../components/furniture-card/FurnitureCard";
import NoDataFound from "../../components/no-data-found/NoDataFound";



const AllShop = () => {
    const [category, ,] = useFurCategory();
    const [furnitures, , isLoading] = useFurnitures();
    const [currentFurnitures, setCurrentFurnitures] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');


    // console.log('find filtered value---------->', filterValue);
    // formated product category 
    const formatFilterText = (text) => text?.replace(/ /g, '_');

    useEffect(() => {
        let findData = furnitures?.filter(furniture =>
            furniture?.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (filterValue && formatFilterText(filterValue) !== 'all-products') {
            findData = findData?.filter(furniture => furniture?.category === formatFilterText(filterValue));
        }

        setCurrentFurnitures(findData);
    }, [furnitures, searchValue, filterValue]);

    if (isLoading) {
        return <Loader />
    }



    return (
        <>
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
                                    {categ?.category?.replace(/_/g, ' ')}
                                </option>)
                            }
                        </select>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-20 lg:p-0 p-5">
                        {
                            currentFurnitures?.length > 0 && currentFurnitures?.map((furniture, idx) =>
                                <FurnitureCard key={idx} furniture={furniture} />
                            )
                        }
                    </div>
                    <div>
                        {
                            currentFurnitures?.length <= 0 && <NoDataFound />
                        }
                    </div>
                </div>
            </Container>
            <FooterPage />
        </>
    );
};

export default AllShop;