import useAllUsers from "../../../../hooks/useAllUsers";

const AllUsers = () => {
    const [allUsers, refetch, isLoading] = useAllUsers();
    console.log(allUsers);
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-5 flex items-center justify-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0939e9] to-[#ff0fdb]">All Users</h1>

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
                            allUsers?.length > 0 && allUsers?.map((user,index) =><tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td className=" text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-center rounded-full w-auto ru">{user?.role}</td>
                                <td>
                                    <select name="role" id="role" className="">
                                        <option selected disabled>Change Here</option>
                                        <option>Admin</option>
                                        <option>Manager</option>
                                        <option>Guest</option>
                                    </select>
                                </td>
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