import ManuList from "../../../shared/manuItems/ManuList";
import { FaHome, } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import { useAuth } from './../../../hooks/useAuth';

const NavLinkManu = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <>
            <div className="flex-none hidden lg:block ">
                <ul className="menu menu-horizontal flex text-black">
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"} icon={FaHome} />
                    <ManuList address={'about'} linkTitle={"About"} icon={FaHome} />
                    <ManuList address={'login'} linkTitle={"Login"} icon={MdLogin} />
                    <span className="bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] rounded-md text-white animate-bounce hover:animate-none ">
                        <ManuList address={'signup'} linkTitle={"Signup"} icon={FaUserPlus} />
                    </span>
                </ul>
            </div>
        </>
    );
};

export default NavLinkManu;