import axios from 'axios'

const urlSummary="https://api.covid19api.com/summary"

const urlDailyTotal = 'https://pomber.github.io/covid19/timeseries.json';


const url = 'https://covid19.mathdro.id/api';

export const fetchSummaryData=async ()=>{
    try {
        const {data:{Global,Date,Countries}} = await axios.get(urlSummary);
        console.log(Countries);
        return {Global,Date,Countries};
    } catch (error) {
        console.log(error);
    }
}


export const fetchDailyData=async (name)=>{
    try {
        const {data} = await axios.get(urlDailyTotal);
        
        const modifiedData=data[name];

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchGlobalSummary=async()=>{
    try {
        const {data:{Global,Date}} = await axios.get(urlSummary);
        return {Global,Date};
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountrySummary=async(name)=>{
    try {
        const {data:{Countries}} = await axios.get(urlSummary);
        const modifiedData=Countries.find((item)=>{
            return item.Country===name;
        });

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}




export const fetchDaily=async()=>{
    try {
        const {data} =await axios.get(`${url}/daily`);
        
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }))

        return modifiedData;
        
    } catch (error) {
        
    }
}





