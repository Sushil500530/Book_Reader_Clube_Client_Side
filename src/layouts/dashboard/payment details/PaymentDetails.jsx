import usePaymentD from "../../../hooks/usePaymentD";
import { BiSolidCommentDetail } from "react-icons/bi";
import Loader from "../../../shared/Loader";
import { BiSolidFileFind } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AdminTitle from './../../../components/title/index';
import Button from './../../../components/button/index';

const PaymentDetails = () => {
    const [payments, refetch, isLoading] = usePaymentD();
    const axiosSecure = useAxiosSecure();
    const sortData = [...payments].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
    console.log(sortData);
    const mainArray = [
        '65ed8b1acc7967b620507cb1',
        '65945a52ce557628b9b12234',
        '65945a52ce557628b9b12236',
        '65945a52ce557628b9b12237',
        '65945a52ce557628b9b12238',
        '65945a52ce557628b9b12239',
        '65945a52ce557628b9b1223b',
        '65945a52ce557628b9b1223c',
        '65945a52ce557628b9b1223d',
        '65945a52ce557628b9b1223e',
        '65945a52ce557628b9b1223f',
        '65945a52ce557628b9b12240',
        '65945a52ce557628b9b12241',
        '65945a52ce557628b9b12243',
        '65945a52ce557628b9b12244',
        '65945a52ce557628b9b12245',
        '65945a52ce557628b9b12246',
        '65945a52ce557628b9b12248',
        '65945a52ce557628b9b12247',
        '65945a52ce557628b9b12249'
    ];

    const filterArray = [
        '65ed8b1acc7967b620507cb1',
        '65edd7fcd948cfd86be2800c',
        '65945a52ce557628b9b12242'
    ];

    const extractedArray = mainArray.filter(item => !filterArray.includes(item));

    console.log(extractedArray);

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
            <AdminTitle>
                <span className="flex items-center gap-1">
                    Payment Details
                    <BiSolidCommentDetail className="w-8 h-8 text-fuchsia-500" />
                </span>
            </AdminTitle>
            <div className="mb-12">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="custom-bg-color text-white text-xl">
                                <th></th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {sortData?.map((payment, index) => (
                                <tr key={payment?._id} className="text-[17px] !font-normal border border-gray-300">
                                    <th className="border border-gray-300">{index + 1}</th>
                                    <th className="border border-gray-300  !font-normal">{payment?.email}</th>
                                    <td className="border border-gray-300">${payment?.price}</td>
                                    <td className="border border-gray-300">{payment?.date?.slice(0, 10) || "N/A"}</td>
                                    <td className="border border-gray-300">
                                        <Button
                                            onClick={() => handleDelete(payment?._id)}
                                            icon={MdDelete}
                                        >

                                        </Button>
                                    </td>
                                </tr>
                            ))}
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