import useFurCategory from "../../../hooks/useFurCategory";
import AOS from 'aos';
import FurniCategCard from './FurniCategCard';
import Container from "../../../shared/container/Container";
import { IoMdShare } from "react-icons/io";
import { Discuss, ThreeDots } from "react-loader-spinner";
const FurniCate = () => {
    const [category, refetch, isLoading] = useFurCategory();
    console.log(category);
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });
    AOS.refresh();
    return (
        <Container>
            <h1 className="text-3xl font-bold text-center my-8">Find Your Fevourite Furniture</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    category?.map(category => <FurniCategCard
                        key={category._id}
                        category={category}
                    ></FurniCategCard>)
                }
            </div>
            {
                category?.length === 0 && <>
                    <div className="w-full h-[60vh] flex item-center justify-center">
                        <ThreeDots
                            height="100"
                            width="100"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                </>
            }
        </Container>
    );
};

export default FurniCate;