import ManuList from "../../../shared/manuItems/ManuList";
import { FaHome, FaSign } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";

const NavLinkManu = () => {
    return (
        <>
            <div className="flex-none hidden lg:block text-white">
                <ul className="menu menu-horizontal flex">
                    {/* Navbar menu content here */}
                    <ManuList address={'/'} linkTitle={"Home"} icon={FaHome} />
                    <ManuList address={'/about'} linkTitle={"About"} icon={FaHome} />
                    <ManuList address={'/login'} linkTitle={"Login"} icon={MdLogin} />
                    <span className="bg-gray-500 animate-bounce hover:animate-none text-black">
                        <ManuList address={'/signup'} linkTitle={"Signup"} icon={FaUserPlus} />
                    </span>
                </ul>
            </div>
        </>
    );
};

export default NavLinkManu;