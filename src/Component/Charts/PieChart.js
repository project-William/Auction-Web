import * as React from "react";
import ReactEcharts from "echarts-for-react";


//Chart style
const style = {
    height: "60vh",
    width: "100%"
};


const PieChart = ({data}) => {
    if(!data){
        return "Loading..."
    }
    //Chart options
    let option = {
        title: {
            text: 'Pie Chart',
            subtext: '',
            left: 'center',
            top:'5%'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            
            top: '15%',
            
            data: ['Confirmed        ', 'New Confirmed ', 'Recovered',
                'New Recovered', 'deaths               ', 'new deaths'],
            left: '10%',
            
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                top:'30%',
                name: '',
                type: 'pie',
                radius: [40, 150],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { value: data.TotalConfirmed, name: 'Confirmed        ' },
                    { value: data.NewConfirmed, name: 'New Confirmed ' },
                    { value: data.TotalRecovered, name: 'Recovered' },
                    { value: data.NewCovered, name: 'New Recovered' },
                    { value: data.TotalDeaths, name: 'deaths               ' },
                    { value: data.NewDeaths, name: 'new deaths' },
                ]
            },

        ]
    };

    return (

        <ReactEcharts option={option} theme='theme' style={style} className="pie-chart" />
    )
}

export default PieChart;