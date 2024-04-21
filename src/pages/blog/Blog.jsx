import Container from "../../shared/container/Container";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const Blog = () => {
    return (
        <Container>
            <div className="w-full md:w-2/3 lg:w-2/3 mx-auto">
                <div className="flex items-center justify-between px-5 mb-5">
                    <div className="flex items-center gap-3">
                        <figure className="w-12 h-12">
                            <img src="https://i.ibb.co/WfPnV0V/sushil-bg.png" alt="person-image" className="w-full h-full rounded-full" />
                        </figure>
                        <div>
                            <h1 className="text-base font-medium">Sushil Apurbo</h1>
                            <p className="text-neutral-600">5mins ago</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-500">
                        <BsThreeDotsVertical className="text-2xl cursor-pointer" />
                        <RxCross2 className="text-3xl cursor-pointer" />
                    </div>
                </div>
                <div>
                    <figure className="w-full h-[500px]">
                        <img src="https://i.ibb.co/M2V49sL/lotika.jpg" alt="post-image" className="w-full h-full" />
                    </figure>
                    <div className="flex items-center justify-around mt-5">
                        <div className="group relative">
                            <button className=" flex items-center gap-3 text-base font-medium px-4 py-2 mt-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 group"><AiOutlineLike className="text-2xl" />Like </button>
                            <div className="transition transform translate-y-2 ease-in-out invisible absolute group-hover:visible -left-20 w-[300px] h-auto text-white group-hover:-translate-y-16 bg-slate-200 flex items-center gap-5 p-3">
                                <button className="flex items-center gap-2 text-xl text-neutral-700 ">👍</button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 ">❤️</button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 ">🤣</button>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-xl text-neutral-700 active:bg-slate-200 px-4 py-2 rounded-full"><FaRegComment className="text-2xl" />Comment</button>
                        <button className="flex items-center gap-2 text-xl text-neutral-700 active:bg-slate-200 px-4 py-2 rounded-full"><PiShareFat className="text-2xl" />Share</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blog;