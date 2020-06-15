import axios from 'axios'

const urlSummary = "https://api.covid19api.com/summary"

const urlDailyTotal = 'https://pomber.github.io/covid19/timeseries.json';


const urlSummaryDaily = 'https://covid19.mathdro.id/api/daily';
const url = 'https://covid19.mathdro.id/api';

export const fetchSummaryData = async () => {
    try {
        const { data: { Global, Date, Countries } } = await axios.get(urlSummary);
        console.log(Countries);
        return { Global, Date, Countries };
    } catch (error) {
        console.log(error);
    }
}


export const fetchDailyData = async (name) => {
    try {
        const { data } = await axios.get(urlDailyTotal);

        const modifiedData = data[name];

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}




export const fetchSumaryDaily = async () => {
    try {
        const { data } = await axios.get(urlSummaryDaily);

        const modifiedData = data.map((dailyData) => ({
            date: dailyData.reportDate,
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered:dailyData.recovered.total
        }))

        return modifiedData;

    } catch (error) {

    }
}


export const fetchGlobalSummary = async () => {
    try {
        const { data: { Global, Date } } = await axios.get(urlSummary);
        return { Global, Date };
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountrySummary = async (name) => {
    try {
        const { data: { Countries } } = await axios.get(urlSummary);
        console.log(Countries);
        const modifiedData = Countries.find((item) => {
            if (name === "Cabo Verde")
                return item.Country === "Cape Verde";
            else if (name === "Czechia")
                return item.Country === "Czech Republic";
            else if (name === "Holy See")
                return item.Country === "Holy See (Vatican City State)";
            else if (name === "Iran")
                return item.Country === "Iran, Islamic Republic of";
            else if (name === "Korea, South")
                return item.Country === "Korea (South)";
            else if (name === "Russia")
                return item.Country === "Russian Federation";
            else if (name === "Saint Vincent and the Grenadines")
                return item.Country === "Saint Vincent and Grenadines";
            else if (name === "Taiwan*")
                return item.Country === "Taiwan, Republic of China";
            else if (name === "Tanzania")
                return item.Country === "Tanzania, United Republic of";
            else if (name === "US")
                return item.Country === "United States of America";
            else if (name === "Venezuela")
                return item.Country === "Venezuela (Bolivarian Republic)";
            else if (name === "Vietnam")
                return item.Country === "Viet Nam";
            else if (name === "Syria")
                return item.Country === "Syrian Arab Republic (Syria)";
            else if (name === "Laos")
                return item.Country === "Lao PDR";
            else if (name === "Laos")
                return item.Country === "Lao PDR";
            else if (name === "Laos")
                return item.Country === "Lao PDR";
            else if (name === "Laos")
                return item.Country === "Lao PDR";
            else if (name === "Laos")
                return item.Country === "Lao PDR";
            else if (name === "Laos")
                return item.Country === "Lao PDR";
            return item.Country === name;
        });

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}











