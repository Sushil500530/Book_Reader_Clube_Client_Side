import { FaDollarSign, FaUsers } from "react-icons/fa";
import StatsCard from "../../../../components/dashboard/stats-card";
import { CgShutterstock } from "react-icons/cg";
import { PieChart } from "./pie-chart";
import { ConversionAndPayoutChart } from "../../line-chart";

export default function AdminHome() {
    return (
        <div className="" >
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <div className="card lg:col-span-1">
                    <div className="md:w-max mx-auto w-full lg:w-full">
                        <PieChart />
                    </div>
                </div>
                <div className="card lg:col-span-2">
                    <ConversionAndPayoutChart />
                </div>
            </div>

        </div >
    )
}
