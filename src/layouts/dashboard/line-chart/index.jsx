import { useState } from "react";
import Chart from "react-apexcharts";
import Button from './../../../components/button/index';

export function ConversionAndPayoutChart() {
    const [selectedSeries, setSelectedSeries] = useState("both");

    const series = [
        {
            name: "Product",
            data: [31, 40, 28, 51, 42, 109, 100],
            color: "#FF8F6DCC",
        },
        {
            name: "Sales",
            data: [11, 32, 45, 32, 34, 52, 41],
            color: "#DBA5FF",
        }
    ];

    const options = {
        chart: {
            type: "area",
            height: 350,
            width: "100%",
        },
        colors: ["#FF8F6DCC", "#DBA5FF"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        fill: {
            type: "solid",
            opacity: 0.5,
        },
        xaxis: {
            categories: ["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "55k", "60k"],
            labels: {
                style: {
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (val) => val.toFixed(0),
            },
        },
        legend: {
            position: "bottom",
            markers: {
                fillColors: ["#FF8F6DCC", "#DBA5FF"],
            },
        },
        tooltip: {
            x: {
                show: false,
            },
        },
    };

    const updatedSeries = selectedSeries === "both"
        ? series
        : [series.find(s => s.name.toLowerCase() === selectedSeries)];

    return (
        <div>
            <div className="flex items-center justify-between gap-2">
                <h1>Conversions & Payout</h1>
                <div className='flex items-center gap-2'>
                    <Button className={`bg-[#FF8F6DCC] px-4 py-2 text-black ${selectedSeries === "product" ? "font-bold" : ""}`} onClick={() => setSelectedSeries("product")}>Product</Button>
                    <Button className={`bg-[#DBA5FF] px-4 py-2 text-black ${selectedSeries === "sales" ? "font-bold" : ""}`} onClick={() => setSelectedSeries("sales")}>Sales</Button>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto mt-6">
                <Chart
                    options={{
                        ...options,
                        fill: {
                            ...options.fill,
                            colors: updatedSeries.map((s) => s.color), // Apply color based on selected series
                        },
                    }}
                    series={updatedSeries}
                    type="area"
                    height={350}
                />
            </div>
        </div>
    );
}
