import { MdManageAccounts } from "react-icons/md";
import useAllUsers from "../../../hooks/useAllUsers";
import { MdAnnouncement } from "react-icons/md";
// import img from '../../../assets/image/feature/banner-1.png'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const ManageAccount = () => {
    const [search, setSearch] = useState('')
    const [findUsers, setFindUsers] = useState([]);
    const [allUsers, refetch] = useAllUsers()
    // console.log(search);
    refetch();
    useEffect(() => {
        const searchItem = allUsers?.filter((item) => item?.name.includes(search.toLocaleLowerCase()));
        // console.log(searchItem);
        setFindUsers(searchItem)
    }, [allUsers, search])


    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchValue = form.search.value;
        setSearch(searchValue)
        // console.log(searchValue);
    }
    const handleAdd = () => {
        toast.error('Does not exist!')
    }

    return (
        <div className="px-3 mb-12">
            <div className="w-full h-auto bg-blue-50 border pb-3 sticky inset-0 top-10 p-3">
                <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-3 py-8">Manage Account <MdManageAccounts className="w-8 h-8 text-fuchsia-500" /></h1>
                <form onSubmit={handleSearch} className="flex items-center justify-center gap-2 relative w-full md:w-[70%] lg:w-1/2 mx-auto mt-5">
                    <input onChange={() => setSearch(event.target.value)} type="search" name="search" placeholder="Search Your Account......" className="input focus:input-bordered input-info w-full pr-28 bg-white text-black" />
                    <button type="submit" className="btn absolute right-0 top-0 text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] hover:text-blue-300">Search</button>
                </form>
            </div>
            {
                findUsers?.length <= 0 ? <>
                    <div className="flex flex-col gap-3 items-center justify-between w-full h-[40vh]">
                        <h1 className="text-2xl mt-10">Not Found Your Account <span className="text-fuchsia-600 text-4xl">!</span></h1>
                        <div><MdAnnouncement className="w-10 h-10 text-fuchsia-600" /></div>
                    </div>
                </> : findUsers?.map(user =>
                    <div key={user?._id} className="flex flex-col md:flex-row gap-3 md:gap-0 lg:gap-0 lg:flex-row items-center justify-between w-full md:w-[70%] lg:w-[550px] mx-auto mt-10 p-3 rounded-md hover:shadow-md hover:border-b-2 border border-b-2 hover:border-b-fuchsia-500 cursor-pointer">
                        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-start gap-5 flex-1 py-1">
                            <figure className="w-20 h-20">
                                <img src={user?.image} className="w-full h-full rounded-full" alt="account-image" />
                            </figure>
                            <div className="flex flex-col lg:items-start gap-2 items-center justify-center">
                                <h1 className="text-xl">{user?.name}</h1>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleAdd} className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-base hover:text-blue-300">Add Your Account</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ManageAccount;