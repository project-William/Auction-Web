import React from 'react'

import {
    WorldCard, BarChart,
    PieChart, LineChart,
    Chart, WorldMap,

} from './Component/Components'
import { fetchSummaryData, fetchDailyData, countrydata } from './API/Json'
import { Grid, Card } from '@material-ui/core'
import style from './App.module.css'

import echartsTheme from './API/EChartTheme'
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import ResponsiveDrawer from './ComponentLayout'

class App extends React.Component {


    state = {
        summarydata: {},
        dailyData: [],
        countryDataArray: []
    }

    

    async componentDidMount() {
        echarts.registerTheme('theme', echartsTheme);
        const fetchedSummaryData = await fetchSummaryData();

        this.setState({ summarydata: fetchedSummaryData });

        const fetchedDailyData = await fetchDailyData();

        this.setState({ dailyData: fetchedDailyData });

        for (var {item} in this.state.dailyData) {
            this.state.countryDataArray.push({item});
        }

    }

    render() {
        const summarydata = this.state.summarydata;
        const countryArray=this.state.countryDataArray;
        console.log(countryArray);

        return (
            <div>
                <ResponsiveDrawer summaryData={summarydata} />
            </div>
        )
    }
}

export default App;
