import * as React from "react";
import ReactEcharts from "echarts-for-react";


//Chart style
const style = {
    height: "60vh",
    width: "100%"
};


const LineChart = ({ data }) => {
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
            data: ['confirmed',
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Recovered',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Deaths',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {},
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            },
        ]
    };

    return (

        <ReactEcharts option={option} theme='theme' style={style} className="pie-chart" />
    )
}

export default LineChart;