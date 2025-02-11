import { FaUsers } from 'react-icons/fa'
import { FaArrowTrendUp } from 'react-icons/fa6'

export default function StatsCard() {
    return (
        <div className="shadow-xl text-black p-4 rounded space-y-2">
            <div className="flex items-center justify-between">
                <h1 className="text-base md:text-xl">Sales</h1>
                <span className="rounded-full w-10 h-10 flex items-center p-2 custom-bg-color">
                    <FaUsers size={30} color="white" />
                </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center">451,1220.00</h1>
            <p>
                <FaArrowTrendUp size={20} />
            </p>
        </div>
    )
}

