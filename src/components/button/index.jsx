/* eslint-disable react/prop-types */

export default function Button({ title, icon: Icon, onClick, className = "py-2 px-4" }) {
    return (
        <div>
            <button onClick={onClick ? onClick : () => { }} className={`custom-bg-color border-none text-white rounded font-medium  hover:text-gray-200 group ${className} `}>
                <span className="flex items-center gap-2 group-hover:-translate-y-[2px] hover:scale-100 [transition:0.5s] ">
                    {title}
                    {
                        Icon && <Icon className="text-2xl" />
                    }
                </span>

            </button>
        </div>
    )
}
