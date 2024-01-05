import { GiLevelFourAdvanced } from "react-icons/gi";
import DManuList from "../../../shared/dashboard manulist/DManuList";
import { MdOutlineAddShoppingCart, MdOutlinePayments } from "react-icons/md";

const GuestManu = () => {
    return (
        <>
            <DManuList address={'promotion'} linkTitle={'Promotion'} icon={GiLevelFourAdvanced} />
            <DManuList address={'create-shop'} linkTitle={'Add Shop'} icon={MdOutlineAddShoppingCart} />
            <DManuList address={'payment-details'} linkTitle={'Payment Details'} icon={MdOutlinePayments} />
        </>
    );
};

export default GuestManu;