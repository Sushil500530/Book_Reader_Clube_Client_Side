import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import useFurnitures from "../../../../hooks/useFurnitures";

const MyProduct = () => {
    const [furnitures, refetch, isLoading] = useFurnitures();
    const { user } = useAuth();
    const [myProducts, setMyProducts] = useState([]);


    useEffect(() => {
        const findProduct = furnitures?.filter(item => item?.email === user?.email);
        setMyProducts(findProduct);
    }, [furnitures, user?.email]);
    // console.log(myProducts);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">My Product {myProducts?.length} is Comming Here Soon!🎉❗❗❗🎉</h1>
        </div>
    );
};

export default MyProduct;