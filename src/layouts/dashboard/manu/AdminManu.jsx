import { GrUserManager } from "react-icons/gr";
import { FaDatabase, FaUsers} from "react-icons/fa";
import { MdOutlineCrisisAlert, MdManageHistory } from "react-icons/md";
import DManuList from "../../../shared/dashboard manulist/DManuList";

const AdminManu = () => {
    return (
        <>
            <DManuList address={'shop-managers'} linkTitle={'Shop Managers'} icon={GrUserManager} />
            <DManuList address={'all-products'} linkTitle={'All Products'} icon={FaDatabase} />
            <DManuList address={'manage-products'} linkTitle={'Manage Products'} icon={MdManageHistory} />
            <DManuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={MdOutlineCrisisAlert} />
            <DManuList address={'all-users'} linkTitle={'All users'} icon={FaUsers} />
        </>
    );
};

export default AdminManu;