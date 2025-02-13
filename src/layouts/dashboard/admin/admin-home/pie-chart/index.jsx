import Chart from "react-apexcharts";

export function PieChart() {
    const options = {
        chart: {
            width: 380,
            type: "donut",
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total Clicks',
                            color: '#373d3f',
                            formatter: (w) => {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b;
                                }, 0);
                            },
                        },
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
        },
        legend: {
            position: "bottom",
            formatter: (val, opts) => {
                return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
            },
        },
        title: {
            text: "Clicks Per Devices",
            align: "center",
            style: {
                fontSize: "16px",
                color: "#373d3f",
            },
        },
        labels: ["Android", "iOS", "Desktop"],
        colors: ["#008FFB", "#00E396", "#FEB019"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: "100%",
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const series = [44, 55, 41]; // Example data for Android, iOS, and Desktop

    return (
        <div id="chart">
            <Chart options={options} series={series} type="donut" width="380" />
        </div>
    );
}
