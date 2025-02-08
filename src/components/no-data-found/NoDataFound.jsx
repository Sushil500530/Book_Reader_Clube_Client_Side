import { FcCancel } from "react-icons/fc";

export default function NoDataFound() {
    return (
        <div className="flex items-center justify-center flex-col gap-5 w-full h-[40vh] pb-12">
            <h1 className="font-medium text-transparent text-xl md:text-2xl lg:text-3xl bg-clip-text custom-bg-color text-start">Products is Not Found!</h1>
            <h1> <FcCancel className="text-6xl" /></h1>
        </div>
    )
}

