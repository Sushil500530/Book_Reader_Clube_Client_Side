import useFurnitures from "../../../hooks/useFurnitures";
import Loader from "../../../shared/Loader";
import RelatedCard from "./RelatedCard";

const RelatedProducts = () => {
    const [furnitures,refetch,isLoading] = useFurnitures();
    // console.log(furnitures);
    const number =Math.floor(Math.random(furnitures?.slice(6 ,15)) * 15);
    // console.log(number);
    refetch();
    if(isLoading){
        return <Loader />
    }
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold text-start">Show Related Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-10 gap-5">
                {
                    furnitures?.length > 0 && furnitures?.slice(number ,15)?.map(furniture => <RelatedCard
                        key={furniture?._id}
                        furniture={furniture}
                        /> )
                }
            </div>
        </div>
    );
};

export default RelatedProducts;