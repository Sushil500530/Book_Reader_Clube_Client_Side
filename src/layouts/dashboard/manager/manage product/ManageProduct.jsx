import useFurnitures from "../../../../hooks/useFurnitures";
import RelatedCard from "../../../../pages/sub-furniture-home/furni details/RelatedCard";
import Loader from "../../../../shared/Loader";

const ManageProduct = () => {
    const [furnitures, refetch, isLoading] = useFurnitures();
    refetch();
    if(isLoading){
        return <Loader />
    }
    return (
        <div className="w-full h-auto mb-10">
            <h1 className="text-3xl text-center font-bold my-5 flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">Manage Your Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-10 gap-5">
                {
                    furnitures?.length > 0 && furnitures?.slice(0, 15)?.map(furniture => <RelatedCard
                        key={furniture?._id}
                        furniture={furniture}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageProduct;