/* eslint-disable react/prop-types */

import { FcGoogle } from "react-icons/fc";

const SocialAccount = ({handleGoogleSignIn, name}) => {
    return (
        <>
            <div onClick={handleGoogleSignIn} className="space-y-3 mt-6">
                <h1 className="flex items-center justify-center py-2 border rounded-full text-3xl ease-in gap-5 hover:bg-[#F2F3F3] cursor-pointer transition hover:text-blue-600 hover:border-blue-500"><FcGoogle></FcGoogle> <span className="text-xl font-bold">{name}</span></h1>
            </div>
        </>
    );
};

export default SocialAccount;