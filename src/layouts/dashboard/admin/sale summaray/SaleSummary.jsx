import { MdDelete } from "react-icons/md";
import useAllSale from "../../../../hooks/useAllSale";
import Loader from "../../../../shared/Loader";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const SaleSummaryAdmin = () => {
    const [allSales, refetch, isLoading] = useAllSale();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/all-sale/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0)
                            refetch();
                        toast.success('Removed successfully!');
                    })
            }
        });
    }


    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className="text-3xl text-center  my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">Sale Summary Product </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-xl text-black">
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSales?.length > 0 && allSales?.map((sale, index) => <tr key={sale?._id} className="text-[18px]">
                                <th>{index + 1}</th>
                                <td><img src={sale?.image} alt="product_image" className="w-20 h-20 rounded-md" /> </td>
                                <td>{sale?.title}</td>
                                <td><span>{sale?.email}</span></td>
                                <td><span >$ {sale?.price}</span></td>
                                <td><span onClick={() => handleDelete(sale?._id)}><MdDelete className="text-red-500 hover:text-red-500 hover:bg-transparent cursor-pointer text-3xl" /></span></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SaleSummaryAdmin;