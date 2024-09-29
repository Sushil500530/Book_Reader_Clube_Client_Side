import { AiFillInteraction } from "react-icons/ai";
import { MdAddShoppingCart, MdOutlineManageHistory, MdSummarize, MdOutlinePointOfSale, MdOutlineFavorite } from "react-icons/md";
import DManuList from "../../../shared/dashboard manulist/DManuList";
import { GiBuyCard } from "react-icons/gi";
const ManagerManu = ({ setIsActive }) => {
    return (
        <>
            <DManuList address={'add-product'} linkTitle={'Add Product'} icon={MdAddShoppingCart} setIsActive={setIsActive} />
            <DManuList address={'my-product'} linkTitle={'My Product'} icon={AiFillInteraction} setIsActive={setIsActive} />
            <DManuList address={'favorites'} linkTitle={'Favorite Products'} icon={MdOutlineFavorite} setIsActive={setIsActive} />
            <DManuList address={'manage-product'} linkTitle={'Manage Product'} icon={MdOutlineManageHistory} setIsActive={setIsActive} />
            <DManuList address={'sales-product'} linkTitle={'Sale Product'} icon={MdOutlinePointOfSale} setIsActive={setIsActive} />
            <DManuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={MdSummarize} setIsActive={setIsActive} />
            <DManuList address={'payment-details'} linkTitle={'Buy Details'} icon={GiBuyCard} setIsActive={setIsActive} />
        </>
    );
};

export default ManagerManu;