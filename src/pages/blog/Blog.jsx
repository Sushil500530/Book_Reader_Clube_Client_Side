import Container from "../../shared/container/Container";
import { BsThreeDotsVertical } from "react-icons/bs";
import like from "../../assets/image/emoji/like.gif";
import love from "../../assets/image/emoji/love.gif";
import angry from "../../assets/image/emoji/angry.gif";
import sad from "../../assets/image/emoji/sad.gif";
import care from "../../assets/image/emoji/care.gif";
import haha from "../../assets/image/emoji/haha.gif";
import wow from "../../assets/image/emoji/wow1.gif";
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
                            <div className="transition transform translate-y-2 ease-in-out invisible absolute group-hover:visible -left-20 w-[300px] h-auto text-white group-hover:-translate-y-20 bg-white shadow flex items-center gap-2 p-0 rounded-full">
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={like} alt="like" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={love} alt="love" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={care} alt="care" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={haha} alt="haha" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={wow} alt="wow" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={sad} alt="sad" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
                                <button className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                    <img src={angry} alt="angry" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                </button>
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