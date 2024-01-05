import { AiFillInteraction } from "react-icons/ai";
import { MdAddShoppingCart, MdOutlineManageHistory, MdSummarize , MdOutlinePointOfSale  } from "react-icons/md";
import DManuList from "../../../shared/dashboard manulist/DManuList";

const ManagerManu = () => {
    return (
        <>
            <DManuList address={'add-product'} linkTitle={'Add Product'} icon={MdAddShoppingCart} />
            <DManuList address={'my-product'} linkTitle={'My Product'} icon={AiFillInteraction} />
            <DManuList address={'manage-product'} linkTitle={'Manage Product'} icon={MdOutlineManageHistory } />
            <DManuList address={'sales-product'} linkTitle={'Sale Product'} icon={MdOutlinePointOfSale  } />
            <DManuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={MdSummarize } />
        </>
    );
};

export default ManagerManu;