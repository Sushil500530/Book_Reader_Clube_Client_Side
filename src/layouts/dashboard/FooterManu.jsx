import { IoMdSettings } from "react-icons/io";
import DManuList from "../../shared/dashboard manulist/DManuList";
import { MdAccountCircle } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const FooterManu = () => {
    const { logoutUser } = useAuth()
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                return toast.success("logout successfully!")
            })
    }
    return (
        <>
            <DManuList address={'/'} linkTitle={'Go Home'} icon={TiHome} />
            <DManuList address={'settings'} linkTitle={'Settings'} icon={IoMdSettings} />
            <DManuList address={'manage-account'} linkTitle={'Manage Account'} icon={MdAccountCircle} />
            <button onClick={handleLogout} className=" flex items-center justify-start text-[18px] font-medium px-4 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] w-full text-start transition-all ease-in hover:scale-100 btn outline-none border-none bg-transparent hover:bg-transparent">
                <span><FiLogOut /></span>
                Logout
            </button>
        </>
    );
};

export default FooterManu;