import { FaAmazonPay } from "react-icons/fa";
import Container from "../../shared/container/Container";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { FaIdCard } from "react-icons/fa";
import CheckoutForm from "./CheckoutForm";

const PaymentSection = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GET_KEY_TOKEN)
    return (
        <Container>
            <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">Please <FaAmazonPay className="w-14 h-14 text-fuchsia-500" /> Now!</h1>
            <h1 className="text-xl font-bold text-center flex items-center mt-3 justify-center gap-2">Give Your Card <FaIdCard className="w-7 h-7 text-fuchsia-500" /> Number!</h1>
            <Elements stripe={stripePromise}>
               <CheckoutForm />
            </Elements>
        </Container>
    );
};

export default PaymentSection;