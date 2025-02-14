import { useState } from "react";
import useAllUsers from "../../../../hooks/useAllUsers";
import ManagerModal from "../all managers/ManagerModal";
import { MdDelete } from "react-icons/md";
import Loader from "../../../../shared/Loader";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import AdminTitle from "../../../../components/title";
import Button from "../../../../components/button";
import { FaRegEdit } from "react-icons/fa";

const AllUsers = () => {
    const [allUsers, refetch, isLoading] = useAllUsers();
    const [roleData, setRoleData] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    const axiosSecure = useAxiosSecure();
    refetch();

    const handleRoleChangeForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const role = form.role.value;
        if (role === 'Change Here') {
            return toast.error("Please select a role !")
        }
        const roleChangeData = {
            email: roleData?.email,
            image: roleData?.image,
            name: roleData?.name,
            role: role,
            status: roleData?.status

        }
        // console.log(roleChangeData);
        try {
            await axiosSecure.patch(`/change-role/${roleData?._id}`, roleChangeData)
                .then(res => {
                    if (res.data?.modifiedCount) {
                        console.log(res.data);
                        toast.success('Role changed successfully!')
                        setIsOpen(false)
                    }
                })
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    const handleRoleChange = async (id) => {
        setIsOpen(true)
        const findRole = allUsers?.find(user => user?._id === id);
        setRoleData(findRole);
    }

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user-delete/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0)
                            refetch();
                        toast.success('Deleted successfully!');
                    })
            }
        });
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="mb-20">

            <ManagerModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div>
                    <form onSubmit={handleRoleChangeForm} className="flex items-center justify-center gap-5 flex-col ">
                        <h1 className="text_gradient text-xl cursor-pointer font-bold">Role Change</h1>
                        <select name="role" id="role" className=" rounded-md">
                            <option selected disabled>Change Here</option>
                            <option value='admin'>Admin</option>
                            <option value='manager'>Manager</option>
                            <option value='guest'>Guest</option>
                        </select>
                        <Button>
                            Change
                        </Button>
                    </form>
                </div>
            </ManagerModal>
            <AdminTitle>
                All Users
            </AdminTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-xl custom-bg-color text-white">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Change Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.length > 0 &&
                            allUsers.map((user, index) => (
                                <tr key={user?._id} className="border border-gray-300">
                                    <th className="border border-gray-300">{index + 1}</th>
                                    <td className="border border-gray-300">{user?.name}</td>
                                    <td className="border border-gray-300">{user?.email}</td>
                                    <td className="border border-gray-300">
                                        <span className="text_gradient font-medium capitalize">
                                            {user?.role}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300">
                                        <Button
                                            className="w-max mx-auto custom-bg-color px-2 py-1"
                                            onClick={() => handleRoleChange(user?._id)}
                                            icon={FaRegEdit}
                                        >

                                        </Button>
                                    </td>
                                    <td className="border border-gray-300">
                                        <span onClick={() => deleteUser(user?._id)}>
                                            <MdDelete className="text-red-500 hover:text-red-500 hover:bg-transparent cursor-pointer text-3xl" />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;