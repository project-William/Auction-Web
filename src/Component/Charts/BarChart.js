import * as React from "react";
import ReactEcharts from "echarts-for-react";



//Chart style
const style = {
    height: "70vh",
    width: "100%",
};

const BarChart = ({ data }) => {

    if (!data) {
        return "Loading...";
    }

    let option = {
        
        title: {
            text: 'Bar Chart',
            subtext: '',
            left:'center',
            top:'5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        legend: {
            top:'12%',
            data: ['Total', 'New']
        },
        grid: {
            left: '3%',
            right: '14%',
            bottom: '10%',
            top:'20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Confirmed', 'Recovered', 'Deaths']
        },
        series: [
            
            {
                name: 'Total',
                type: 'bar',
                data: [
                    data.TotalConfirmed/10000, 
                    data.TotalRecovered/10000, 
                    data.TotalDeaths/10000
                ]
                
            },
            {
                name: 'New',
                type: 'bar',
                data: [
                    data.NewConfirmed/10000,
                    data.NewConfirmed/10000,
                    data.NewConfirmed/10000
                ]
            }
        ]
    };
    

    return (
        <ReactEcharts option={option} theme='theme' style={style} className="pie-chart" />
    );
}

export default BarChart;