import { useState } from "react";
import useAllUsers from "../../../../hooks/useAllUsers";
import ManagerModal from "../all managers/ManagerModal";

const AllUsers = () => {
    const [allUsers, refetch, isLoading] = useAllUsers();
    console.log(allUsers);
    let [isOpen, setIsOpen] = useState(false);
    refetch();
    function openModal() {
        setIsOpen(true)
    }
    const handleRoleChange = async () => {
        setIsOpen(true)
    }
    return (
        <div>
            <ManagerModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <form onSubmit={handleRoleChange}>
                    <select name="role" id="role" className=" rounded-md">
                        <option selected disabled>Change Here</option>
                        <option value='admin'>Admin</option>
                        <option value='manager'>Manager</option>
                        <option value='guest'>Guest</option>
                    </select>
                </form>
            </ManagerModal>
            <h1 className="text-3xl text-center font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">All Users</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Change Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.length > 0 && allUsers?.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td><span className=" bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] text-white px-3 py-2 rounded-full">{user?.role}</span></td>
                                <td onClick={()=>handleRoleChange(user?._id)}><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb] hover:text-purple-500 link-hover cursor-pointer font-bold">Click Here</span></td>
                                <td>Blue</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;