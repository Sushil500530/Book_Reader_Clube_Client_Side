/* eslint-disable react/prop-types */
import { GiLevelFourAdvanced } from "react-icons/gi";
import DManuList from "../../../shared/dashboard manulist/DManuList";
import { MdOutlineAddShoppingCart, MdOutlinePayments, MdOutlineFavorite } from "react-icons/md";
import { } from "react-icons/md";
const GuestManu = ({ setIsActive }) => {
    return (
        <>
            <DManuList address={'promotion'} linkTitle={'Promotion'} icon={GiLevelFourAdvanced} setIsActive={setIsActive} />
            <DManuList address={'favorites'} linkTitle={'Favorite Products'} icon={MdOutlineFavorite} setIsActive={setIsActive} />
            <DManuList address={'create-shop'} linkTitle={'Add Shop'} icon={MdOutlineAddShoppingCart} setIsActive={setIsActive} />
            <DManuList address={'payment-details'} linkTitle={'Payment Details'} icon={MdOutlinePayments} setIsActive={setIsActive} />
        </>
    );
};

export default GuestManu;