import useFurCategory from "../../../hooks/useFurCategory";
// import AOS from 'aos';
import FurniCategCard from './FurniCategCard';
import Container from "../../../shared/container/Container";
import Loader from "../../../shared/Loader";
const FurniCate = () => {
    const [category, refetch,] = useFurCategory();
    refetch()
    return (
        <Container>
            <h1 className="text-3xl text-black font-bold text-center lg:w-[350px] mx-auto">Find Furniture</h1>
            <p className="text-sm text-black/70 text-center mb-8 mt-2 lg:w-[550px] mx-auto">Discover a curated collection of stylish, high-quality furniture designed to transform your spaces effortlessly.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    category?.map(category => (
                        <FurniCategCard
                            key={category._id}
                            category={category}
                        />
                    ))
                }
            </div>
            {
                category?.length <= 0 && <>
                    <Loader />
                </>
            }
        </Container>
    );
};

export default FurniCate;