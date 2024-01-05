import useFurCategory from "../../../hooks/useFurCategory";
// import AOS from 'aos';
import FurniCategCard from './FurniCategCard';
import Container from "../../../shared/container/Container";
import Loader from "../../../shared/Loader";
const FurniCate = () => {
    const [category ,refetch , ] = useFurCategory();
    refetch()
    // console.log(category);
    // AOS.init({
    //     offset: 200,
    //     duration: 600,
    //     easing: 'ease-in-sine',
    //     delay: 100,
    // });
    // AOS.refresh();
    return (
        <Container>
            <h1 className="text-3xl text-black font-bold text-center my-8">Find Your Fevourite Furniture</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    category?.map(category => (<FurniCategCard
                        key={category._id}
                        category={category}
                    ></FurniCategCard>))
                }
            </div>
            {
                category?.length === 0 && <>
                    <Loader />
                </>
            }
        </Container>
    );
};

export default FurniCate;