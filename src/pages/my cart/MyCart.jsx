import Container from "../../shared/container/Container";

const MyCart = () => {
    return (
        <Container>
            <h1 className="text-3xl font-bold text-center">My Cart is Here</h1>
            <div className="flex items-center justify-between">
                <h1></h1>
                <button className="btn text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb]">Pay</button>
            </div>
        </Container>
    );
};

export default MyCart;