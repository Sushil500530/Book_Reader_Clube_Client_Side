/* eslint-disable react/prop-types */

export default function Button({ children, icon: Icon, onClick, className = "custom-bg-color py-2 px-4 hover-custom-bg-color" }) {
    return (
        <div>
            <button onClick={onClick ? onClick : () => { }} className="border-none text-white rounded font-medium group hover:text-gray-200 w-full">
                <span className={`flex items-center justify-center gap-2 group-hover:-translate-y-[2px] hover:scale-100 [transition:0.5s] rounded ${className} `}>
                    {children}
                    {
                        Icon && <Icon className="text-2xl" />
                    }
                </span>
            </button>
        </div>
    )
}
