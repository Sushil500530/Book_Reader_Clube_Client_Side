import { FaDollarSign, FaUsers } from "react-icons/fa";
import StatsCard from "../../../../components/dashboard/stats-card";
import { CgShutterstock } from "react-icons/cg";

export default function AdminHome() {
    return (
        <div className="" >
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatsCard
                        title="Total Income"
                        value="$ 48,500K"
                        icon={FaDollarSign}
                    />
                    <StatsCard
                        title="Product"
                        value="25000"
                        icon={CgShutterstock}
                    />
                    <StatsCard
                        title="Sales"
                        value="$ 32,000k"
                        icon={FaDollarSign}
                    />
                    <StatsCard
                        title="Users"
                        value="1,500K"
                        icon={FaUsers}
                    />

                </div>
            </div>


        </div >
    )
}
