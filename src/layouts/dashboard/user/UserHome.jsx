import { MdOutlineFavorite } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { Link} from "react-router-dom";
import useFavorite from "../../../hooks/useFavorite";
import ShowFavorite from "./showBuyProduct/ShowFavorite";

const UserHome = () => {
    const [favorites,refetch,] = useFavorite();
    console.log(favorites);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  border-b-2">
                    <div className="">
                        <h1 className="text-2xl text-blue-500 font-bold flex items-center justify-center gap-2">Favorite<MdOutlineFavorite className="text-fuchsia-600 w-7 h-7" /> Products </h1>
                        <div className="w-full h-[70vh] flex flex-col items-center justify-between mt-8">
                    <div>
                        {
                            favorites?.length > 0 && favorites?.map(favorite => 
                            <ShowFavorite key={favorite?._id} favorite={favorite} refetch={refetch} />)
                        }
                    </div>
                        </div>
                    </div>
                <div className="">
                    <h1 className="text-[17px] font-bold flex items-center justify-center gap-2">Do You Want to Sell Your Products?</h1>
                    <Link to='/dashboard/create-shop'>
                        <p className="text-blue-500 hover:link-hover text-center mt-2">Please Click Here</p>
                    </Link>
                    <div className="mt-8">

                    </div>
                </div>
                    <div className="">
                        <h1 className="text-2xl text-blue-500 font-bold flex items-center justify-center gap-2  ">Your Profile<FcManager className="text-fuchsia-600 w-7 h-7" /></h1>
                        <div className="mt-8">

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserHome;