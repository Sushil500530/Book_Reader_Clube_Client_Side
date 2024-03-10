import useFavorite from "../../../../hooks/useFavorite";

const FavoriteProduct = () => {
    const [favorites,refetch,isLoading] = useFavorite();
    console.log(favorites);
    return (
        <div className="mt-20">
            <h2>Favorite product is {favorites?.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="hover:bg-blue-400 text-2xl text-center w-full h-[300px] relative rounded-md">
                    <div className="absolute lg:left-[130px] md:left-36 left-40 -top-10 w-36 h-36 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteProduct;