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
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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


                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium p__opensans">
                                Total Sales
                            </dt>
                            <dd className="text-4xl font-extrabold text-first md:text-5xl">
                                $4.8m
                            </dd>
                        </div>
                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                            <dt className="order-last p__opensans">Total Teacher</dt>
                            <dd className="text-4xl font-extrabold text-first md:text-5xl">
                                24
                            </dd>
                        </div>
                        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center  ">
                            <dt className="order-last  p__opensans">Total Students</dt>
                            <dd className="text-4xl font-extrabold text-first md:text-5xl">
                                86
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row ">
                <div className="w-full h-auto lg:w-1/2">
                    <div style={{ width: '100%', height: 300 }}>
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
