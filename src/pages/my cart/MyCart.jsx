import useSale from "../../hooks/useSale";
import notImage from '../../assets/image/product-not-fount.jpg'
import Container from "../../shared/container/Container";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import ForSaleData from "../../layouts/dashboard/user/ForSaleData";

const MyCart = () => {
    const [sales, refetch,] = useSale();
    // console.log(sales);
    const getPrice = sales?.reduce((total, currentItem) => total + (currentItem?.price), 0);
    return (
        <Container>
            <h1 className="text-3xl font-bold text-center">My Cart is Here</h1>
            <div>

                <h1 className="text-xl font-bold my-5">Show Your Buy Products</h1>
                <hr className="w-[80%] h-[2px] bg-fuchsia-600 mx-auto mb-5" />
                {
                    sales?.length === 0 && <div className="flex flex-col w-full h-auto p-8 gap-5">
                        <h1 className="text-xl font-bold">Sorry! <br /> Your Product is not found</h1>
                        <img src={notImage} className="w-full h-[40vh]" alt="not-found-product" />
                    </div>
                }
                <div className="w-full h-[70vh] flex flex-col items-center justify-between p-2">
                    <div>
                        {
                            sales?.length > 0 && sales?.map(sale => <ForSaleData key={sale?._id} sale={sale} refetch={refetch} />)
                        }
                    </div>
                    <div className=" flex items-center justify-center flex-col gap-5">
                        <div className="bg-clip-content mt-10 p-6 border-4 border-violet-300 border-dashed">
                            <h1 className="text-xl font-bold">Total Price : $ {getPrice}</h1>
                        </div>
                        <Link to='/checkout'>
                            <button disabled={sales?.length === 0} className="btn bg-gradient-to-r from-[#0939e8] to-[#ff0fdb]  text-white text-xl hover:text-blue-300"><FaDollarSign className="text-2xl font-bold" />Checkout Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MyCart;