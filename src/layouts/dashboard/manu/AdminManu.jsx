import { GrUserManager } from "react-icons/gr";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { MdOutlineCrisisAlert, MdManageHistory } from "react-icons/md";
import DManuList from "../../../shared/dashboard manulist/DManuList";

const AdminManu = ({ setIsActive }) => {
    return (
        <>
            <DManuList address={'shop-managers'} linkTitle={'Shop Managers'} icon={GrUserManager} setIsActive={setIsActive} />
            <DManuList address={'all-products'} linkTitle={'All Products'} icon={FaDatabase} />
            <DManuList address={'manage-products'} linkTitle={'Manage Products'} icon={MdManageHistory} setIsActive={setIsActive} />
            <DManuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={MdOutlineCrisisAlert} setIsActive={setIsActive} />
            <DManuList address={'all-users'} linkTitle={'All users'} icon={FaUsers} setIsActive={setIsActive} />
        </>
    );
};

export default AdminManu;