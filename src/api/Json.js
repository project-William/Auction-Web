import axios from 'axios'

const urlSummary="https://api.covid19api.com/summary"

const urlDailyTotal = 'https://pomber.github.io/covid19/timeseries.json';


const url = 'https://covid19.mathdro.id/api';

export const fetchSummaryData=async ()=>{
    try {
        const {data:{Global,Date}} = await axios.get(urlSummary);
        
        return {Global,Date};
    } catch (error) {
        console.log(error);
    }
}


export const fetchDailyData=async ()=>{
    try {
        const {data} = await axios.get(urlDailyTotal);
        
        return data;
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

export const countrydata=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);

        return countries.map((country)=>country.name);


    } catch (error) {
        
    }
}




