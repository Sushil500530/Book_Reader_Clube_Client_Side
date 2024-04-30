import { AiFillInteraction } from "react-icons/ai";
import { MdAddShoppingCart, MdOutlineManageHistory, MdSummarize , MdOutlinePointOfSale, MdOutlineFavorite  } from "react-icons/md";
import DManuList from "../../../shared/dashboard manulist/DManuList";
import { GiBuyCard } from "react-icons/gi";
const ManagerManu = () => {
    return (
        <>
            <DManuList address={'add-product'} linkTitle={'Add Product'} icon={MdAddShoppingCart} />
            <DManuList address={'my-product'} linkTitle={'My Product'} icon={AiFillInteraction} />
            <DManuList address={'favorites'} linkTitle={'Favorite Products'} icon={MdOutlineFavorite} />
            <DManuList address={'manage-product'} linkTitle={'Manage Product'} icon={MdOutlineManageHistory } />
            <DManuList address={'sales-product'} linkTitle={'Sale Product'} icon={MdOutlinePointOfSale  } />
            <DManuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={MdSummarize } />
            <DManuList address={'payment-details'} linkTitle={'Buy Details'} icon={GiBuyCard } />
        </>
    );
};

export default ManagerManu;