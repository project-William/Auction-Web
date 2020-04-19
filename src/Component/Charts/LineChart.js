import * as React from "react";
import ReactEcharts from "echarts-for-react";


//Chart style
const style = {
    height: "60vh",
    width: "100%"
};


const LineChart = ({ data }) => {
    console.log(data.map(({date})=>date));

    const date=data.map(({date})=>date);
    const confirmed=data.map(({confirmed})=>confirmed);
    const recovered=data.map(({recovered})=>recovered);
    const deaths=data.map(({deaths})=>deaths);

    console.log(date[date.length-1]);
    if (!data) {
        return "Loading..."
    }
    //Chart options
    let option = {
        title: {
            text: 'Line Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: '8%',
            data: [
                'confirmed',
                'Recovered', 
                'Deaths'    
            ]
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '0%',
            top: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data:[
                    date[data.length-14],
                    date[data.length-13],
                    date[data.length-12],
                    date[data.length-11],
                    date[data.length-10],
                    date[data.length-9],
                    date[data.length-8],
                    date[data.length-7],
                    date[data.length-6],
                    date[data.length-5],
                    date[data.length-4],
                    date[data.length-3],
                    date[data.length-2],
                    date[data.length-1],
                ]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'confirmed',
                type: 'line',
                areaStyle: {},
                data: [
                    confirmed[data.length-14],
                    confirmed[data.length-13],
                    confirmed[data.length-12],
                    confirmed[data.length-11],
                    confirmed[data.length-10],
                    confirmed[data.length-9],
                    confirmed[data.length-8],
                    confirmed[data.length-7],
                    confirmed[data.length-6],
                    confirmed[data.length-5],
                    confirmed[data.length-4],
                    confirmed[data.length-3],
                    confirmed[data.length-2],
                    confirmed[data.length-1]
                    
                ]
            },
            {
                name: 'Recovered',
                type: 'line',
                areaStyle: {},
                data: [
                    recovered[data.length-14],
                    recovered[data.length-13],
                    recovered[data.length-12],
                    recovered[data.length-11],
                    recovered[data.length-10],
                    recovered[data.length-9],
                    recovered[data.length-8],
                    recovered[data.length-7],
                    recovered[data.length-6],
                    recovered[data.length-5],
                    recovered[data.length-4],
                    recovered[data.length-3],
                    recovered[data.length-2],
                    recovered[data.length-1]
                
                ]
            },
            {
                name: 'Deaths',
                type: 'line',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {},
                data: [
                    deaths[deaths.length-14],
                    deaths[deaths.length-13],
                    deaths[deaths.length-12],
                    deaths[deaths.length-11],
                    deaths[deaths.length-10],
                    deaths[deaths.length-9],
                    deaths[deaths.length-8],
                    deaths[deaths.length-7],
                    deaths[deaths.length-6],
                    deaths[deaths.length-5],
                    deaths[deaths.length-4],
                    deaths[deaths.length-3],
                    deaths[deaths.length-2],
                    deaths[deaths.length-1]
                
                ]
            },
        ]
    };

    return (

        <ReactEcharts option={option} theme='theme' style={style} className="pie-chart" />
    )
}

export default LineChart;