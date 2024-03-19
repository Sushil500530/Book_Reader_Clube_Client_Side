import { MdDelete } from "react-icons/md";
import useAllSale from "../../../../hooks/useAllSale";
import Loader from "../../../../shared/Loader";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SaleSummaryAdmin = () => {
    const [allSales, refetch, isLoading] = useAllSale();
    const axiosSecute = useAxiosSecure();


    console.log(allSales);
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
            console.log(result);
        //     if (result.isConfirmed) {
        //         axiosSecure.delete(`/manager-delete/${id}`)
        //             .then(res => {
        //                 if (res?.data?.deletedCount > 0)
        //                     console.log(res);
        //                 toast.success('Removed successfully!');
        //             })
        //         refetch();
        //     }
        });
    }


    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">Sale Summary Product </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-xl">
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
                            allSales?.length > 0 && allSales?.map((sale, index) => <tr key={sale?._id}>
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