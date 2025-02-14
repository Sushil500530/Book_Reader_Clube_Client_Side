/* eslint-disable no-unused-vars */
import { FaArrowTrendUp } from "react-icons/fa6";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CgShutterstock } from "react-icons/cg";
import CustomChart from "./charts/CustomChart";
// import Revenue from "./Revenue/Revenue";
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import StatsCard from "../../../components/dashboard/stats-card";

const UserHome = () => {

    const data = [
        { name: "Students", value: 400 },
        { name: "Teachers", value: 300 },
    ];

    const COLORS = ["#0088FE", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

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

            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row mt-10">
                <div className="w-full h-auto lg:w-1/2 shadow-md p-4">
                    <div className="">
                        <ResponsiveContainer>
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"  >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center p__opensans gap-4">
                        <p>User</p>{" "}
                        <button className="px-1 py-2 bg-[#0088FE]"></button>
                        <p>Imployee</p>{" "}
                        <button className="px-1 py-2 bg-[#00C49F]"></button>
                    </div>
                </div>
                {/* <div className="flex-1">
                        <Revenue></Revenue>
                    </div> */}
                <CustomChart />
            </div>
        </div >
    );
};

export default UserHome;
