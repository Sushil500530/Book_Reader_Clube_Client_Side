import ManuList from "../../../shared/manuItems/ManuList";
import {FaHome} from 'react-icons/fa';
const Sidebar = () => {
    return (
        <>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu w-80 min-h-full bg-blue-50 flex items-center text-black">
                    {/* Sidebar content here */}
                    <ManuList address={'/'} linkTitle={"Home"} icon={FaHome} />
                    <ManuList address={'about'} linkTitle={"About"} icon={FaHome} />
                </ul>
            </div>
        </>
    );
};

export default Sidebar;