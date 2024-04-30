import usePaymentD from "../../../hooks/usePaymentD";
import { BiSolidCommentDetail } from "react-icons/bi";
import Loader from "../../../shared/Loader";
import { BiSolidFileFind } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentDetails = () => {
    const [payments, refetch, isLoading] = usePaymentD();
    const axiosSecure = useAxiosSecure();
    console.log(payments);
    const sortData = [...payments].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    console.log(sortData);

    // ['65945a52ce557628b9b1223b', '65945a52ce557628b9b12253', '65945a52ce557628b9b1223c', '65945a52ce557628b9b12248']
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/payment/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="mt-12">
            <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">Payment Details <BiSolidCommentDetail className="w-8 h-8 text-fuchsia-500" /></h1>
            <div className="my-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-200 text-xl">
                                <th></th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                sortData?.map((payment, index) =>
                                    <tr key={payment?._id} className="text-[17px]">
                                        <th>{index + 1}</th>
                                        <th>{payment?.email} </th>
                                        <td>${payment?.price}</td>
                                        <td>{payment?.date?.slice(0, 10)}</td>
                                        <td>
                                            <button onClick={() => handleDelete(payment?._id)} className="btn bg-red-600 text-white hover:text-red-600"><MdDelete className="w-9 h-9" /></button>
                                        </td>

                                    </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        sortData?.length <= 0 && <div className="flex items-center justify-center gap-3 flex-col w-full h-[50vh]">
                            <h1 className="text-2xl font-bold">Not Found Your Payment Details <span className="text-fuchsia-600 text-3xl font-bold">!</span></h1>
                            <BiSolidFileFind className="text-7xl text-fuchsia-600" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;