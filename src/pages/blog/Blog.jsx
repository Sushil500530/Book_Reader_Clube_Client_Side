import Container from "../../shared/container/Container";
import { BsThreeDotsVertical } from "react-icons/bs";
import like from "../../assets/image/emoji/like.gif";
import love from "../../assets/image/emoji/love.gif";
import angry from "../../assets/image/emoji/angry.gif";
import sad from "../../assets/image/emoji/sad.gif";
import care from "../../assets/image/emoji/care.gif";
import haha from "../../assets/image/emoji/haha.gif";
import wow from "../../assets/image/emoji/wow1.gif";
import like2 from "../../assets/image/emoji/like.jpg";
import love2 from "../../assets/image/emoji/love.png";
import angry2 from "../../assets/image/emoji/angry.png";
import sad2 from "../../assets/image/emoji/sad.png";
import care2 from "../../assets/image/emoji/care.png";
import haha2 from "../../assets/image/emoji/haha.png";
import wow2 from "../../assets/image/emoji/wow.png";

import { RxCross2 } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { useState } from "react";

const Blog = () => {
    const [emoji, setEmoji] = useState([]);
    const [imageName,setImageName] = useState('');
    const [showImage, setShowImage] = useState('');
    

    return (
        <Container>
            <div className=" w-full md:w-2/3 lg:w-2/3 mx-auto flex items-end justify-end my-8">
                <div className=" w-32 h-auto bg-base-100 shadow-xl p-2 cursor-pointer rounded-full text-center">Create Post</div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" placeholder="email" className="" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className=" w-full md:w-2/3 lg:w-2/3 mx-auto flex flex-col gap-5">
                <div className="flex items-center justify-between px-5">
                    <div className="flex items-center gap-3">
                        <figure className="w-12 h-12 rounded-full">
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
                <div className="px-3">
                    <figure className="w-full h-[500px]">
                        <img src="https://i.ibb.co/M2V49sL/lotika.jpg" alt="post-image" className="w-full h-full" />
                    </figure>
                    <div className="p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                {
                                    emoji === 'like' && <img src={like2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                                {
                                    emoji === 'love' && <img src={love2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                                {
                                    emoji === 'care' && <img src={care2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                                {
                                    emoji === 'haha' && <img src={haha2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                                {
                                    emoji === 'sad' && <img src={sad2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                                {
                                    emoji === 'angry' && <img src={angry2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                                {
                                    emoji === 'wow' && <img src={wow2} alt="like" className="w-6 h-6 cursor-pointer" />
                                }
                            </div>
                            <div>
                                <h1 className="hover:underline text-neutral-500 cursor-pointer">1 Comment</h1>
                            </div>
                        </div>
                        <hr className="bg-neutral-300 w-full h-[2px] my-3" />
                        <div className="flex items-center justify-around ">
                            <div className="group relative">
                                <button className=" flex items-center gap-2 lg:text-xl md:text-lg text-base font-medium px-4 py-2 mt-1 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 group text-neutral-700 active:bg-slate-200 "><AiOutlineLike className="text-2xl" />Like </button>
                                <div className="transition transform translate-y-2 ease-in-out invisible absolute group-hover:visible md:-left-20 lg:-left-20 w-[300px] h-auto text-white group-hover:-translate-y-20 bg-white shadow flex items-center gap-2 p-0 rounded-full">
                                    <button onClick={() => setEmoji('like')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={like} alt="like" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                    <button onClick={() => setEmoji('love')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={love} alt="love" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                    <button onClick={() => setEmoji('care')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={care} alt="care" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                    <button onClick={() => setEmoji('haha')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={haha} alt="haha" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                    <button onClick={() => setEmoji('wow')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={wow} alt="wow" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                    <button onClick={() => setEmoji('sad')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={sad} alt="sad" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                    <button onClick={() => setEmoji('angry')} className="flex items-center gap-2 text-xl text-neutral-700 p-1">
                                        <img src={angry} alt="angry" className="w-10 h-10 hover:scale-105 hover:-translate-y-2 duration-200 transition" />
                                    </button>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 lg:text-xl md:text-lg text-base text-neutral-700 active:bg-slate-200 px-4 py-2 rounded-full"><FaRegComment className="text-2xl" />Comment</button>
                            <button className="flex items-center gap-2 lg:text-xl md:text-lg text-base text-neutral-700 active:bg-slate-200 px-4 py-2 rounded-full"><PiShareFat className="text-2xl" />Share</button>
                        </div>
                        <hr className="bg-neutral-300 w-full h-[2px] mb-3" />
                        <p className="hover:underline text-neutral-500 cursor-pointer inline-block">View More Comments</p>
                        <div className="flex items-start gap-3">
                            <div className="w-64">
                                <figure className="w-12 h-12 rounded-full">
                                    <img src="https://i.ibb.co/WfPnV0V/sushil-bg.png" alt="person-image" className="w-full h-full rounded-full" />
                                </figure>
                            </div>
                            <div className="bg-slate-100 rounded-2xl shadow-md p-3">
                                <h1 className="text-base font-semibold text-start hover:underline cursor-pointer inline-block">Sushil Apurbo</h1>
                                <p>Wow nice photo!❤️❤️ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vel perspiciatis, est iusto repudiandae culpa sed doloribus! Nihil delectus reprehenderit eaque adipisci. Consequatur fugiat hic ea eos facilis soluta ab.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </Container>
    );
};

export default Blog;