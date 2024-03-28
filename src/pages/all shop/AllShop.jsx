import Container from "../../shared/container/Container";
import { FaSearch } from "react-icons/fa";
import useFurnitures from './../../hooks/useFurnitures';
import useFurCategory from "../../hooks/useFurCategory";


const AllShop = () => {
    const [furnitures, refetch, isLoading] = useFurnitures();
    const [category, ,] = useFurCategory();
    return (
        <Container>
            <div>
                <div className="flex items-center justify-between w-1/2 mx-auto gap-5">
                    <div className="w-full relative">
                        <input type="text" name="search" className="w-full px-4 py-3 text-gray-800 border rounded-md border-blue-400 " placeholder="search your product here....." />
                        <FaSearch className="text-2xl absolute top-3  right-2" />
                    </div>
                    <select className="input-bordered w-1/3 px-4 py-3 text-gray-800 border rounded-md border-blue-400 ">
                        <option value="filter-category">Filter By Category</option>
                        {
                            category?.length > 0 && category.map(categ => <option key={categ?._id} required>
                                {categ?.category}
                            </option>)
                        }
                    </select>
                </div>
            </div>
        </Container>
    );
};

export default AllShop;