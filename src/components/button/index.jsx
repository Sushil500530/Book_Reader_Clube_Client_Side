/* eslint-disable react/prop-types */

export default function Button({ title, icon: Icon }) {
    return (
        <div>
            <button className="custom-bg-color text-white rounded font-medium py-2 px-4 hover:text-gray-200 group ">
                <span className="flex items-center gap-2 transform group-hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ">
                    {title}
                    {
                        Icon && <Icon className="text-2xl" />
                    }
                </span>

            </button>
        </div>
    )
}
