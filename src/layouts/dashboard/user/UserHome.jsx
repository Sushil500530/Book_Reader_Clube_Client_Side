/* eslint-disable no-unused-vars */
import { FaArrowTrendUp } from "react-icons/fa6";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import CustomChart from "./charts/CustomChart";
// import Revenue from "./Revenue/Revenue";
import { FaUsers } from 'react-icons/fa';

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
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-5 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-tr from-[#0939e8] to-[#ff0fdb] p-4 rounded space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-base md:text-xl text-white">Sales</h1>
                            <span>
                                <FaUsers size={30} color="white" />
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">451,1220.00</h1>
                        <p>
                            <FaArrowTrendUp color="white" size={20} />
                        </p>
                    </div>
                    <div className="bg-gradient-to-tr from-[#0939e8] to-[#ff0fdb] p-4 rounded space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-base md:text-xl text-white">Incomes</h1>
                            <span>
                                <FaUsers size={30} color="white" />
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">451,1220.00</h1>
                        <p>
                            <FaArrowTrendUp color="white" size={20} />
                        </p>
                    </div>
                    <div className="bg-gradient-to-tr from-[#0939e8] to-[#ff0fdb] p-4 rounded space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-base md:text-xl text-white">Products</h1>
                            <span>
                                <FaUsers size={30} color="white" />
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">451,1220.00</h1>
                        <p>
                            <FaArrowTrendUp color="white" size={20} />
                        </p>
                    </div>
                    <div className="bg-gradient-to-tr from-[#0939e8] to-[#ff0fdb] p-4 rounded space-y-2">
                        <div className="flex items-center justify-between">
                            <h1 className="text-base md:text-xl text-white">Users</h1>
                            <span>
                                <FaUsers size={30} color="white" />
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">451,1220.00</h1>
                        <p>
                            <FaArrowTrendUp color="white" size={20} />
                        </p>
                    </div>
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
