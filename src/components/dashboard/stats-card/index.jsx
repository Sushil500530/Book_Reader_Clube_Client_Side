/* eslint-disable react/prop-types */
import { FaArrowTrendUp } from 'react-icons/fa6'

export default function StatsCard({ title, value, icon: Icon }) {
    return (
        <div className="card text-black p-4 rounded space-y-2">
            <div className="flex items-center justify-between">
                {
                    title && <h1 className="text-sm">{title}</h1>
                }
                {
                    Icon && <span className="rounded-full w-10 h-10 flex items-center p-2 custom-bg-color">
                        <Icon size={30} color="white" />
                    </span>
                }
            </div>
            {
                value && <h1 className="text-3xl md:text-4xl font-bold text-center">{value}</h1>
            }
            <p>
                <FaArrowTrendUp size={20} />
            </p>
        </div>
    )
}

